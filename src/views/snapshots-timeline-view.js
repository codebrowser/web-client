codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    initialize: function () {

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 41);

        /* jshint newcap: true */
    },

    /* Render */

    render: function () {

        // Clear canvas
        this.canvas.clear();

        var y = this.canvas.height / 2 + 3;
        var width = this.$el.width() - 10;

        // Line
        var line = this.canvas.path('M 10 ' + y + ' L ' + width + ' ' + y);
        $(line.node).attr('class', 'line');

        // Start circle
        var startCircle = this.canvas.circle(10, y, 5);
        $(startCircle.node).attr('class', 'circle');

        // End circle
        var endCircle = this.canvas.circle(width, y, 5);
        $(endCircle.node).attr('class', 'circle');
    }
});
