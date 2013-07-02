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

    drawLine: function (leftOffset, y, x) {

        // Line
        var line = this.canvas.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        line.toBack();

        // Style
        $(line.node).attr('class', 'line');
    },

    drawSnapshotCircle: function (snapshot, x, y, radius) {

        var self = this;

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

        snapshotCircle.mouseover(function () {

            this.animate({transform: 's1.4'}, 150);
        });

        snapshotCircle.mouseout(function () {

            this.animate({transform: 's1'}, 150);
        });
    },

    drawPointer: function (x, y, radius) {

        var pointerSet = this.canvas.set();

        var pointerArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);

        $(pointerArea.node).attr('class', 'pointer-area');

        var width = 8;

        var pointerX = x - width / 2;
        var pointerY = y + 25;

        var pointerLineX = x;
        var pointerLineY = pointerY - width;

        var pointerLine = this.canvas.path('M' +
                                           pointerLineX +
                                           ' ' +
                                           pointerLineY +
                                           ', L' +
                                           pointerLineX +
                                           ' ' +
                                           0);

        pointerLine.toBack();
        $(pointerLine.node).attr('class', 'pointer');

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

        pointerSet.push(pointerArea);
        pointerSet.push(pointerLine);
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
            var radius = 8;

            x += (radius * 2);

            // Left offset
            if (index === 0) {
                leftOffset = x;
            }

            self.drawSnapshotCircle(snapshot, x, y, radius);

            if (index === self.currentSnapshotIndex) {
                self.drawPointer(x, y, radius);
            }

            if (index !== self.collection.length - 1) {
                x += distance;
            }
        });

        this.drawLine(leftOffset, y, x);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex) {

        this.collection = collection;
        this.currentSnapshotIndex = currentSnapshotIndex;

        this.render();
    }
});
