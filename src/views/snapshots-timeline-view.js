codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    initialize: function () {

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 100);

        /* jshint newcap: true */
    },

    /* Render */

    render: function () {

        // Clear canvas
        this.canvas.clear();

        var y = this.canvas.height / 2 + 2;
        var width = this.$el.width();

        // Line
        var line = this.canvas.path('M 0 ' + y + ' L ' + width + ' ' + y);

        line.attr('stroke-width', '2px');
        line.attr('stroke', '#878787');

        // Start circle
        var startCircle = this.canvas.circle(5, y, 5);

        startCircle.attr('fill', '#878787');
        startCircle.attr('stroke', '#878787');

        // End circle
        var endCircle = this.canvas.circle(width - 5, y, 5);

        endCircle.attr('fill', '#878787');
        endCircle.attr('stroke', '#878787');
    }
});
