codebrowser.view.SnapshotsConceptHeatmapView = Backbone.View.extend({

    id: 'snapshots-concept-heatmap-container',

    isActive: Utils.getLocalStorageValue('showConceptHeatmap', false) === 'true',

    // concept container (bubble) diameter
    diameter: 400,

    format: null,

    color: null,


    initialize: function() {

        this.format = d3.format(',d');
        this.color = d3.scale.category20c();

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConceptHeatmap', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot) {
        var self = this;
        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId')

        };

        this.collection = new codebrowser.collection.ExerciseConceptsCollection([], options);

        this.collection.fetch({

            success: function() {

                var concepts = self.collection.toJSON();
                console.log(concepts);
                var snapshotArray = [];
                var conceptArray = [];
                var maxConceptSize = 0;
                for (var key in concepts[0]) {
                    snapshotArray.push(concepts[0][key]);
                    // jshint -W083
                    concepts[0][key].forEach(function(concept) {
                        if (conceptArray.indexOf(concept.name) === -1) {
                            conceptArray.push(concept.name);
                        }
                        if (concept.size > maxConceptSize) {
                            maxConceptSize = concept.size;
                        }
                    })
                    // jshint +W083
                }
                self.concepts = {maxConceptSize: maxConceptSize, snapshots: snapshotArray, concepts: conceptArray};

                if (self.initialized === undefined) { // if this is the first rendering
                    self.firstRender();
                }
                else {
                    self._updateHeatmap();
                }
            }

        });

    },

    firstRender: function() {

        this.width = $('#snapshots-concept-heatmap-container').width();
        this.height = 400;

        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('class', 'heatmap');

        this._drawHeatmap();

        this.initialized = true;

    },

    _drawHeatmap: function() {
        console.log(this.concepts);
        var self = this;
        var snapshots = this.concepts.snapshots;
        var concepts = this.concepts.concepts;
        var widthOffset;
        var heightOffset = 30;
        var rectWidth;
        var rectHeight = Math.floor((self.height - heightOffset)/concepts.length);

        // draw labels for concepts
        var textElements = this.svg.selectAll('text')
            .data(concepts).enter()
            .append('g')
            .attr('transform', function(d, i ) { return 'translate(5, ' + ((i * rectHeight) + 15) + ')'; })
            .append('text')
            .attr('fill', 'rgb(0,0,0)')
            .text(function(d) { return d });

        // Calculate grid offset based on the longest concept string
        var maxTextWidth = 0;
        textElements.each(function() {
            if (this.getBBox().width > maxTextWidth) {
                maxTextWidth = this.getBBox().width;
            }
        });
        widthOffset = maxTextWidth + 20;
        rectWidth = Math.floor((self.width - widthOffset)/snapshots.length);

        // draw labels for snapshots
        this.svg.selectAll('.snapshot-index')
            .data(snapshots).enter()
            .append('g')
            .attr('class', 'snapshot-index')
            .attr('transform', function(d, i ) { return 'translate(' + ((i * rectWidth) + widthOffset + 6) + ',' + (self.height - heightOffset + 5) + ')'; })
            .append('text')
            .attr('fill', 'rgb(0,0,0)')
            .text(function(d, i) { return i + 1 });

        // jshint -W083
        for (var snapshotIndex = 0, len = snapshots.length; snapshotIndex < len; snapshotIndex++) {
            var snapshotData = snapshots[snapshotIndex];

            // draw grid
            this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
                .data(concepts)
                .enter()
                .append('svg:rect')
                .attr('class', 'snapshot_' + (snapshotIndex + 1))
                .attr('x', (snapshotIndex * rectWidth) + widthOffset)
                .attr('y', function(d, i) { return i * rectHeight; })
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .style('stroke', function() {
                    return 'rgba(0,0,0,0.5)';
                })
                .style('stroke-width', 2);

            // color rectangles to represent concept size
            this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
                //.data(concepts)
                .style('fill', function(d) {
                    var returnValue = 'rgb(255,255,255)';
                    snapshotData.forEach(function(concept) {
                        if (concept.name === d) {
                            returnValue = 'rgba(0,0,0, ' + concept.size/self.concepts.maxConceptSize +')'
                        }

                    });
                    return returnValue;
                });

            // highlight rows on mouseover
/*                .on('mouseover', function(thisData) {
                    self.svg.selectAll('rect').filter(function(d) { return d === thisData })
                        .style('fill', 'rgb(0,255,0)');
                })
                .on('mouseout', function(thisData) {
                    self.svg.selectAll('rect').filter(function(d) { return d === thisData })
                        .style('fill', function(d) {
                            var returnValue = 'rgb(255,255,255)';
                            snapshotData.forEach(function(concept) {
                                if (concept.name === d) {
                                    returnValue = 'rgba(0,0,0, ' + concept.size/self.concepts.maxConceptSize +')'
                                }

                            });
                            return returnValue;
                        })
                });*/


        }

    },

    _updateHeatmap: function() {



    }

});






