codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    /* Dragging */

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        // Parent view
        this.parentView = options.parentView;

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 61);

        /* jshint newcap: true */
    },

    calculateDistanceWeight: function (index, min, max) {

        var weight = 1;

        if (index === 0) {
            return weight;
        }

        var difference = this.collection.getDifference(index, index - 1);

        // Scale between 1 and 4
        weight = 3 * (difference - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        if (weight > 4) {
            weight = 4;
        }

        return weight;
    },

    /* Render */

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.canvas.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshot: function (snapshot, x, y, radius) {

        var self = this;

        // Snapshot area element
        var snapshotArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        var snapshotElement = self.canvas.circle(x, y, radius);
        $(snapshotElement.node).attr('class', 'snapshot');

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotElement.data('snapshot', snapshot);
        snapshotElement.data('file', file);

        snapshotElement.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file);
        });

        snapshotElement.mouseover(function () {

            this.animate({ transform: 's1.2' }, 150);
        });

        snapshotElement.mouseout(function () {

            this.animate({ transform: 's1' }, 150);
        });
    },

    renderSnapshotIndex: function (index, x, y) {

        var text = this.canvas.text(x, y - 30, index + 1);
        $(text.node).attr('class', 'snapshot-index');
    },

    renderPointer: function (x, y, radius) {

        // Set
        var pointerSet = this.canvas.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = y + 27;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.canvas.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        pointerSet.push(pointerLine);

        // Pointer element
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

        // Pointer area element
        var pointerArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);
        $(pointerArea.node).attr('class', 'area pointer');

        pointerSet.push(pointerArea);

        var self = this;

        // Dragging events
        var onMove = function (dx) {

            pointerSet.transform('T ' + dx + ', 0');
        }

        var onStart = function () {

            self.dragging = true;
        }

        var onEnd = function () {

            self.dragging = false;
            self.render();
        }

        // Dragging
        pointerSet.drag(onMove, onStart, onEnd).onDragOver(function (element) {

            // Snapshot element
            if (element.data('snapshot')) {
                self.parentView.navigate(element.data('snapshot'), element.data('file'));
            }
        });
    },

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        var duration = codebrowser.helper.Duration.calculate(snapshot.get('snapshotTime'), previousSnapshot.get('snapshotTime'), true);

        this.canvas.text(x - radius - distance / 2, y + 15, duration);
    },

    render: function () {

        // Clear canvas
        this.canvas.clear();

        // Center point
        var y = this.canvas.height / 2 + 3;

        var leftOffset = 0;
        var x = 0;

        var self = this;

        var min = this.collection.getMinDuration(); // 970
        var max = this.collection.getMaxDuration(); // 675415

        this.collection.each(function (snapshot, index) {

            var weight = self.calculateDistanceWeight(index, min, max);

            // Weight by time between snapshots
            var distance = 50 * weight;

            // TODO: Weight by amount of differences
            var radius = 7;

            x += (radius * 2);


            if (index === 0) {
                // Left offset
                leftOffset = x;
            } else {
                x += distance;
            }

            var previousSnapshot = self.collection.at(index - 1);

            // Render duration between snapshots
            self.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render index of the snapshot
            self.renderSnapshotIndex(index, x, y);

            self.renderSnapshot(snapshot, x, y, radius);

            // Draw pointer on current snapshot
            if (index === self.currentSnapshotIndex) {
                self.renderPointer(x, y, radius);
            }
        });

        this.renderTimeline(leftOffset, y, x);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename) {

        this.collection = collection;
        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        // Render if user is not dragging
        if (!this.dragging) {
            this.render();
        }
    }
});
