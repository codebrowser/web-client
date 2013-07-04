codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    /* Absolute width */

    width: 0,

    /* Scrolling */

    scroll: null,

    /* Dragging */

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        // Hide view until needed
        this.$el.hide();

        // Parent view
        this.parentView = options.parentView;

        /* jshint newcap: false */

        this.paper = Raphael(this.el, '100%', 81);

        /* jshint newcap: true */
    },

    distanceWeight: function (index, min, max) {

        var weight = 0;

        // First snapshot has a static weight
        if (index === 0) {
            return 1;
        }

        // Duration between snapshots
        var duration = this.collection.getDuration(index, index - 1);

        // Scale between 1 and 4
        weight = 3 * (duration - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(4, weight);
    },

    moveTimeline: function (dx) {

        var x = 0;

        // View width
        var viewWidth = $(this.paper.canvas).width();

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        // Can't move dx to left
        if ((x + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.paper.setViewBox(Math.max(0, 0 - x), 0, viewWidth, this.paper.height, false);

            return;
        }

        // Can't move dx to right
        if ((x + viewWidth + dx) >= this.width && dx > 0) {

            // Remainder
            var remainder = this.width - x - viewWidth;

            // Move by remainder
            this.paper.setViewBox(x + remainder, 0, viewWidth, this.paper.height, false);

            return;
        }

        // Move viewbox
        this.paper.setViewBox(x + dx, 0, viewWidth, this.paper.height, false);

        // Move pointer set
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        // Duration label
        var duration = codebrowser.helper.Duration.calculate(snapshot.get('snapshotTime'), previousSnapshot.get('snapshotTime'), true);

        // Duration element
        this.paper.text(x - radius - distance / 2, y + 20, duration);
    },

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderSnapshot: function (snapshot, x, y, radius) {

        var self = this;

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        var snapshotElement = self.paper.circle(x, y, radius);
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

            this.animate({ transform: 'S 1.2' }, 150);
        });

        snapshotElement.mouseout(function () {

            this.animate({ transform: 'S 1' }, 150);
        });
    },

    renderPointer: function (x, radius) {

        // Set
        this.pointerSet = this.paper.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = this.paper.height;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
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

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        var min = this.collection.getMinDuration();

        // 10 minute max
        var max = Math.min(300000, this.collection.getMaxDuration());

        // Clear paper
        this.paper.clear();

        // Center point
        var y = this.paper.height / 2 + 3;

        var leftOffset = 0;
        var rightOffset = 0;
        var x = 0;

        var self = this;

        this.collection.each(function (snapshot, index) {

            var weight = self.distanceWeight(index, min, max);

            // Weight by duration between snapshots
            var distance = 50 * weight;

            // TODO: Weight by amount of differences
            var radius = 8;

            x += (radius * 2);

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === self.collection.length - 1) {

                // Right offset
                rightOffset = radius;
            }

            var previousSnapshot = self.collection.at(index - 1);

            // Render duration between snapshots
            self.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render index of the snapshot
            self.renderSnapshotIndex(index, x);

            // Render snapshot
            self.renderSnapshot(snapshot, x, y, radius);

            // Render pointer on current snapshot
            if (index === self.currentSnapshotIndex) {
                self.renderPointer(x, radius);
            }
        });

        // Render timeline
        this.renderTimeline(leftOffset, y, x);

        // Absolute width
        this.width = leftOffset + x + rightOffset;
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename) {

        this.collection = collection;
        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Render if user is not dragging
        if (!this.dragging) {
            this.render();
        }
    },

    /* Events */

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        // Clear scroll
        clearInterval(this.scroll);
        this.scroll = false;

        this.dragging = false;

        this.render();
    },

    dragMove: function (dx, dy, x) {

        if (!this.scroll) {

            // Move pointer set
            this.pointerSet.transform('T ' + dx + ', 0');
        }

        var viewWidth = $(this.paper.canvas).width();
        var canvasOffset = $(this.paper.canvas).offset();

        var leftOffset = canvasOffset.left;
        var rightOffset = canvasOffset.left + viewWidth;

        var self = this;

        // Move timeline to left
        if (x < leftOffset + 50) {

            if (!this.scroll) {

                // Scroll to the left
                this.scroll = setInterval(function () {

                    // Move timeline to the left
                    self.moveTimeline(-1);

                }, 1000 / 60);
            }

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            if (!this.scroll) {

                // Scroll to the right
                this.scroll = setInterval(function () {

                    // Move timeline to the right
                    self.moveTimeline(1);

                }, 1000 / 60);
            }

            return;
        }

        // Clear scroll
        clearInterval(this.scroll);
        this.scroll = false;
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'));
        }
    }
});
