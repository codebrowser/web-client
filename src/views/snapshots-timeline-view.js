codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    initialize: function (options) {

        // Parent view
        this.parentView = options.parentView;

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 61);

        /* jshint newcap: true */
    },

    /* Render */

    drawTimeline: function (leftOffset, y, x) {

        // Line
        var timeline = this.canvas.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    drawSnapshot: function (snapshot, x, y, radius) {

        var self = this;

        // Snapshot element
        var snapshotElement = self.canvas.circle(x, y, radius);
        $(snapshotElement.node).attr('class', 'snapshot');

        // Set models for snapshot element
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotElement.data('snapshot', snapshot);
        snapshotElement.data('file', file);

        snapshotElement.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file);
        });

        snapshotElement.mouseover(function () {

            this.animate({transform: 's1.2'}, 150);
        });

        snapshotElement.mouseout(function () {

            this.animate({transform: 's1'}, 150);
        });
    },

    drawPointer: function (x, y, radius) {

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = y + 27;

        // Set
        var pointerSet = this.canvas.set();

        // Pointer area
        var pointerArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);
        $(pointerArea.node).attr('class', 'pointer-area');

        pointerSet.push(pointerArea);

        // Pointer line
        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        var pointerLine = this.canvas.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);

        $(pointerLine.node).attr('class', 'pointer-line');
        pointerLine.toBack();

        pointerSet.push(pointerLine);

        // Pointer
        var pointer = this.canvas.path('M' +
                                        pointerX +
                                        ' ' +
                                        pointerY +
                                        ', L' +
                                        (pointerX + width / 2) +
                                        ' ' +
                                        (pointerY - width) +
                                        ', ' +
                                        (pointerX + width) +
                                        ' ' +
                                        pointerY +
                                        'Z');

        $(pointer.node).attr('class', 'pointer');

        pointerSet.push(pointer);
    },

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
            var radius = 7;

            x += (radius * 2);

            // Left offset
            if (index === 0) {
                leftOffset = x;
            }

            self.drawSnapshot(snapshot, x, y, radius);

            // Draw pointer on current snapshot
            if (index === self.currentSnapshotIndex) {
                self.drawPointer(x, y, radius);
            }

            if (index !== self.collection.length - 1) {
                x += distance;
            }
        });

        this.drawTimeline(leftOffset, y, x);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename) {

        this.collection = collection;
        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        this.render();
    }
});
