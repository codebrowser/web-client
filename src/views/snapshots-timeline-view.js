codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    initialize: function (options) {

        // Parent view
        this.parentView = options.parentView;

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 41);

        /* jshint newcap: true */
    },

    /* Render */

    render: function () {

        // Clear canvas
        this.canvas.clear();

        // Center point
        var y = this.canvas.height / 2 + 3;

        var leftOffset = 0;
        var x = 0;

        var self = this;

        this.collection.each(function (snapshot, index) {

            // TODO: Weight by time between snapshots
            var distance = 100;

            // TODO: Weight by amount of differences
            var radius = 8;

            x += (radius * 2);

            // Left offset
            if (index === 0) {
                leftOffset = x;
            }

            // Snapshot circle
            var snapshotCircle = self.canvas.circle(x, y, radius);
            snapshotCircle.data('snapshot', snapshot);

            // Style
            $(snapshotCircle.node).attr('class', 'circle');

            snapshotCircle.click(function () {

                var snapshot = this.data('snapshot');

                // Navigate
                self.parentView.navigate(snapshot);
            });

            if (index !== self.collection.length - 1) {
                x += distance;
            }
        });

        // Line
        var line = this.canvas.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        line.toBack();

        // Style
        $(line.node).attr('class', 'line');
    },

    /* Update */

    update: function (collection) {

        this.collection = collection;

        this.render();
    }
});
