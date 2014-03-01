
codebrowser.view.SnapshotsConceptBubbleView = Backbone.View.extend({

    id: 'snapshots-concept-bubbles-container',

    isDisabled: true,

    isActive: false,

    // concept container (bubble) diameter
    diameter: 400,

    format: null,

    color: null,


    initialize: function() {

        this.isDisabled = Utils.getLocalStorageValue('config.concepts', false) === 'false';
        this.isActive = !this.isDisabled && Utils.getLocalStorageValue('showConceptBubbles', false) === 'true';

        this.format = d3.format(',d');
        this.color = d3.scale.category20c();

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConceptBubbles', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot) {
        var self = this;
        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId'),
            snapshotId : snapshot.get('id')

        };

        this.collection = new codebrowser.collection.ConceptCollection([], options);

        this.collection.fetch({

            success: function() {

                self.concepts = Utils.parseConceptData(self.collection.toJSON());

                if (self.initialized === undefined) { // if this is the first rendering
                    self.firstRender();
                }
                else {
                    self._updateConceptList();
                    self._updateBubbles();
                }
            }

        });

    },

    firstRender: function() {

        // add container for bubble chart
        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', this.diameter)
            .attr('height', this.diameter)
            .attr('class', 'bubble');

        this._drawConceptList();
        this._drawInitialBubbles();

        this.initialized = true;

    },

    _getListTextPosition: function(d) {
        return '50,' + ((this.concepts.children.indexOf(d) + 3) * 20);
    },

    _drawConceptList: function() {

        var self = this;
        var concepts = this.concepts.children;

        // add container for concept list
        this.listSvg = d3.select('#' + this.id).append('svg')
            .attr('width', this.diameter)
            .attr('height', this.diameter)
            .attr('class', 'list');

        var textElements = this.listSvg.selectAll('.list-element')
            .data(concepts);

        // Add elements and text for all concepts
        textElements.enter()
            .append('g')
            .attr('class', 'list-element')
            .attr('transform', function(d) {
                    return 'translate(' + self._getListTextPosition(d) + ')';
                })
            .append('text')
            .attr('fill', function(d) { return self.color(d.name); })
            .style('font-size', '16px')
            .text(function(d) { return d.name + ': ' + d.value ; } );

    },

    _updateConceptList: function() {

        var self = this;
        var concepts = this.concepts.children;

        var listElements = this.listSvg.selectAll('.list-element')
            .data(concepts, function(d) { return d.name } );

        // create elements for new concepts
        var g = listElements.enter().append('g')
            .attr('class', 'list-element')
            .attr('transform', function(d) {
                return 'translate(' + self._getListTextPosition(d) + ')';
            });


        // add text for new concepts
        g.append('text')
            .style('opacity', 0)
            .style('font-size', '16px')
            .attr('fill', function(d) { return self.color(d.name); })
            .text(function(d) { return d.name + ': ' + d.value ; });


        // update text for existing concepts, interpolate value change by whole numbers
        // and animate transformation to full opacity
        listElements.select('text').transition().duration(1000)
            .tween('text', function(d) {
                var i = d3.interpolate(this.textContent.substr(this.textContent.indexOf(':') + 2), d.value)
                return function(t) {
                    var value = i(t) % 1 === 0 ? i(t) : Math.round(i(t));
                    this.textContent = d.name + ': ' + value;
                };
            })
            .style('opacity', 1);


        // move concepts to correct places in list and animate transition
        listElements.transition().duration(1000)
            .attr('transform', function(d) {
                return 'translate(' + self._getListTextPosition(d) + ')';
            });

        // remove exiting concepts
        listElements.exit().remove();

    },

    _drawInitialBubbles: function() {

        // initialize the container bubble that holds all concept circles
        this.bubble = d3.layout.pack()
            .sort(null)
            .size([this.diameter, this.diameter])
            .padding(1.5);

        // Bind data to elements with .node-class (even if there aren't any yet...)
        var data = this.svg.selectAll('.node')
            .data(this.bubble.nodes(this.concepts)
                .filter(function(d) { return !d.children; }));

        // create g-elements for new concepts and position them correctly
        var newNodes = this._createNewConceptNodes(data.enter());

        // add titles for new nodes
        this._addTitle(newNodes);

        // add circles for new nodes
        this._addCircle(newNodes);

        // add text for new nodes
        this._addText(newNodes);

        data.select('text')
            .text(function(d) { return d.name.substring(0, ((d.r / 3) - 1)); })
            .transition().delay(1000)
            .duration(1000)
            .style('opacity', 1);

    },

    _updateBubbles: function() {

        var concepts = this.concepts;
        var self = this;

        // bind data to new nodes and match old nodes to new ones by concept name
        var data = this.svg.selectAll('.node')
            .data(this.bubble.nodes(concepts)
            .filter(function(d) { return !d.children; }), function(d) { return d.name });


        /*** Node adding ***/

        // initialize new concepts
        var newNodes = this._createNewConceptNodes(data.enter());
        newNodes.append('title');
        this._addCircle(newNodes);
        this._addText(newNodes);


        /*** Node updating ***/

        // update position for old bubbles and animate the transition
        data.transition().delay(1000).duration(1000)
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
            .style('opacity', 1);

        // update circle size for old concepts and animate the transition
        data.select('circle').transition().delay(1000).duration(1000)
            .attr('r', function(d) { return d.r; });

        // update titles for old and added concepts
        data.select('title')
            .text(function(d) { return d.name + ': ' + self.format(d.value); });

        // update text for old and added concepts
        data.select('text')
            .transition().delay(1000).duration(1000)
            .style('opacity', 1)
            .text(function(d) { return d.name ? d.name.substring(0, ((d.r / 3) - 1)) : ''; });


        /*** Node removal ***/

        // animate the shrinking of exiting concept circles before removing them from DOM
        data.exit().selectAll('circle')
            .transition().delay(1000)
            .duration(1000)
            .attr('r', 0)
            .remove();

        // animate the removal of DOM-elements belonging to exiting concepts
        data.exit()
            .style('opacity', 1)
            .transition().delay(1000)
            .duration(1000)
            .style('opacity', 0)
            .remove();

    },

    _addCircle: function(nodes) {

        var self = this;
        nodes.append('circle')
            .style('fill', function(d) { return self.color(d.name); })
            .attr('r', 0)
            .transition().delay(1000)
            .duration(2000)
            .attr('r', function(d) { return d.r; });

    },

    _addTitle: function(nodes) {

        var self = this;
        nodes.append('title')
            .text(function(d) {
                return d.name + ': ' + self.format(d.value);
            });

    },

    _addText: function(nodes) {

        nodes.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .style('opacity', 0.00001);

    },

    // Add g-elements to new concepts and position them
    _createNewConceptNodes: function(data) {

        return data.append('g')
            .attr('class', 'node')
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

    }

});






