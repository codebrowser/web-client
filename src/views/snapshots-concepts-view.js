codebrowser.view.SnapshotsConceptsView = Backbone.View.extend({

    id: 'snapshots-concepts-container',

    isActive: Utils._getLocalStorageValue('showConcepts', false) === 'true',

    diameter: null,
    format: null,
    color: null,
    node: null,

    initialize: function() {

        this.diameter = 400;
        this.format = d3.format(',d');
        this.color = d3.scale.category20c();

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConcepts', this.isActive);

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

                if (self.node === null) {
                    self.render(parseData(self.collection.toJSON()));

                }
                else {
                    console.log('refreshing');
                    self.refresh(parseData(self.collection.toJSON()));
                }
            }

        });
    },

    render: function(concepts) {

        var diameter = this.diameter;
        var color = this.color;
        var format = this.format;

        this.pack = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);

        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', diameter)
            .attr('height', diameter)
            .attr('class', 'bubble');


        this.node = this.svg.selectAll('.node')
            .data(this.pack.nodes(concepts))
            .enter().append('g')
            .attr('class', 'node')
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

        this.node.append('title')
            .text(function(d) {
                if (d.name === undefined) {
                    return 'Concepts'
                }
                return d.name + ': ' + format(d.value);
            });

        this.node.append('circle')
            .style('opacity', function(d) {
                if (d.name === undefined) {
                    return 0;
                }
                return 1;
            })
            .attr('r', 0)
            .transition()
            .duration(2000)
            .attr('r', function(d) { return d.r; })
            .style('fill', function(d) { return color(d.name); });

        this.node.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text(function(d) { return d.name });

    },

    refresh: function(concepts) {

        var format = this.format;
        var color = this.color;

        this.node = this.svg.selectAll('.node')
            .data(this.pack.nodes(concepts));

        var g = this.node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

        g.append('title')
            .text(function(d) {
                if (d.name === undefined) {
                    return 'Concepts'
                }
                return d.name + ': ' + format(d.value);
            });

        g.append('circle')
            .style('fill', function(d) { return color(d.name); })
            .attr('r', 0)
            .transition()
            .duration(2000)
            .transition()
            .duration(2000)
            .attr('r', function(d) { return d.r; });

        g.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text(function(d) { return d.name })
            .style('opacity', 0)
            .transition()
            .duration(2000)
            .style('opacity', 1);

        this.node.transition()
            .duration(2000)
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

        this.node.select('circle')
            .transition()
            .duration(2000)
            .attr('r', function(d) { return d.r; });

        this.node.exit().selectAll('circle')
            .transition()
            .duration(2000)
            .attr('r', 0)
            .remove();

        this.node.exit().selectAll('text')
            .transition()
            .duration(1000)
            .style('opacity', 0);

        this.node.exit().transition().delay(2000).remove();


    }

});

function parseData(data) {

    data.forEach(function(element) {

        element.value = parseInt(element.size, 10);

    });

    return { children: data };
}





