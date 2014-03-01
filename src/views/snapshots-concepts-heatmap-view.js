
codebrowser.view.SnapshotsConceptHeatmapView = Backbone.View.extend({

    id: 'snapshots-concept-heatmap-container',

    isDisabled: true,

    isActive: false,

    format: undefined,

    initialized: undefined,

    lastIndex: undefined,

    initialize: function(options) {

        this.parentView = options.parentView;

        this.isDisabled = Utils.getLocalStorageValue('config.concepts', false) === 'false';
        this.isActive = !this.isDisabled && Utils.getLocalStorageValue('showConceptHeatmap', false) === 'true';

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConceptHeatmap', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot, index) {
        var self = this;
        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId')

        };

        if (self.initialized === undefined) { // if this is the first rendering

            this.collection = new codebrowser.collection.ExerciseConceptsCollection([], options);

            this.collection.fetch({

                success: function() {

                    var concepts = self.collection.toJSON();
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
                        });
                        // jshint +W083
                    }
                    self.concepts = {maxConceptSize: maxConceptSize, snapshots: snapshotArray, concepts: conceptArray};

                    self.firstRender(index);
                }

            });
        }

        else {

            self._updateHeatmap(index);

        }

    },

    firstRender: function(index) {

        this.width = $('#snapshots-concept-heatmap-container').width();
        this.height = 400;

        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('class', 'heatmap');

        this._drawHeatmap(index);

        this.initialized = true;
        this.lastIndex = index;

    },

    _drawHeatmap: function(index) {

        var self = this;
        var snapshots = this.concepts.snapshots;
        var concepts = this.concepts.concepts;
        var widthOffset;
        var heightOffset = 5;
        var rectWidth;
        var rectHeight = Math.floor((self.height - heightOffset)/concepts.length) - 2;

        // draw labels for concepts
        var textElements = this.svg.selectAll('.concept')
            .data(concepts).enter()
            .append('g')
            .attr('class', 'concept')
            .attr('transform', function(d, i ) { return 'translate(5, ' + ((i * rectHeight) + rectHeight/2 + 4) + ')'; })
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
            .attr('transform', function(d, i ) {
                var xOffset = i < 9 ? 5 : 9; // offset for two-digit labels
                return 'translate(' + ((i * rectWidth) + ((rectWidth/2) - xOffset) + widthOffset) + ',' + (self.height - heightOffset) + ')';
            })
            .append('text')
            .attr('class', function(d, i) { return 'snapshotlabel_' + (i + 1)})
            .attr('fill', 'rgb(0,0,0)')
            .style('font-weight', function(d, i) { return i === index ? 'bold' : 'normal' })
            .style('opacity', function(d, i) { return i === index ? 1 : 0 })
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
                .attr('y', function(d, i) { return (i * (rectHeight) + 2); })
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .style('stroke', function() {
                    return snapshotIndex === index ? 'rgba(90,90,90,0.9)' : 'rgba(90,90,90,0.4)';
                })
                .style('stroke-width', 1);

            // color rectangles to represent concept size
            this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
                .style('fill', function(d) {
                    var returnValue = 'rgb(255,255,255)';
                    snapshotData.forEach(function(concept) {
                        if (concept.name === d) {
                            returnValue = 'rgba(0,0,0, ' + concept.size/self.concepts.maxConceptSize +')'
                        }

                    });
                    return returnValue;
                })

                // highlight row labels on mouseover
                .on('mouseover', function(thisData) {
                    changeConceptLabelWeight(thisData, 'bold');
                    changeSnapshotLabelOpacity(this, 1);
                })
                .on('mouseout', function(thisData) {
                    changeConceptLabelWeight(thisData, 'normal');
                    changeSnapshotLabelOpacity(this, 0);
                })
                .on('click', function() {
                    var snapshotIndex = parseInt($(this).attr('class').substr(9), 10) - 1;
                    self.parentView.navigateToIndex(snapshotIndex);
                });

            var changeSnapshotLabelOpacity = function(element, opacity) {
                var snapshotIndex = parseInt(element.className.baseVal.substr(9), 10);
                if (snapshotIndex !== self.lastIndex + 1) {
                    self.svg.selectAll('.snapshotlabel_' + snapshotIndex)
                        .style('opacity', opacity);
                }
            };

            var changeConceptLabelWeight = function(elementData, weight) {
                self.svg.selectAll('.concept text').filter(function(d) { return d === elementData })
                    .style('font-weight', weight);
            };


        }

    },

    _updateHeatmap: function(snapshotIndex) {

        // old column hilighting
        this.svg.selectAll('.snapshot_' + (this.lastIndex + 1))
            .style('stroke', 'rgba(90,90,90,0.4)');

        // new column hilighting
        this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
            .style('stroke', 'rgba(90,90,90,0.9)');

        // remove bolding from and fade away last snapshot label
        this.svg.selectAll('.snapshotlabel_' + (this.lastIndex + 1))
            .transition()
            .duration(1000)
            .style('opacity', 0)
            .style('font-weight', 'normal');

        // add bolding to current snapshot label
        this.svg.selectAll('.snapshotlabel_' + (snapshotIndex + 1))
            .transition()
            .duration(1000)
            .style('opacity', 1)
            .style('font-weight', 'bold');


        this.lastIndex = snapshotIndex;

    }

});






