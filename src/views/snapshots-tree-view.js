codebrowser.view.SnapshotsTreeView = Backbone.View.extend({

    id: 'snapshots-tree-container',
    className: 'visualization-container',

    template: {

        filenameContainer: Handlebars.templates.TreeFilenameContainer,
        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    /* Absolute width */

    width: 0,

    /* X-coordinates of all snapshots */

    snapshotPositions: [],

    /* Pointer */

    pointerSetOffsetX: 0,

    /* Scroll */

    scroll: null,

    /* Dragging */

    dragging: false,

    bottomContainer: null,

    filenameContainer: null,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        var topContainer = $('<tr>');
        topContainer.attr('class','top-container');
        this.$el.append(topContainer);

        // File name container
        this.filenameContainer = $('<td>');
        this.filenameContainer.attr('class','filename-container');
        topContainer.append(this.filenameContainer);

        var toprightContainer = $('<td>');
        toprightContainer.attr('class', 'raphael-container')
        topContainer.append(toprightContainer);

        /* jshint newcap: false */

        this.paper = Raphael(toprightContainer.get(0), '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width();
        var center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            this.setViewBox(this.width - viewWidth);

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        // Cx of the current snapshot element
        var cx = this.snapshotPositions[this.currentSnapshotIndex];

        // Make previous snapshot element visible
        if (this.currentSnapshotIndex !== 0) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex - 1])) {
                this.centerOn(cx);
            }
        }

        // Make next snapshot element visible
        if (this.currentSnapshotIndex !== this.snapshotPositions.length - 1) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex + 1])) {
                this.centerOn(cx);
            }
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderTimeline: function (leftOffset, y, x, dashed) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', dashed ? 'timeline-dashed' : 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderFilenameContainer: function (files) {

        var filenames = [];

        for (var i = 0; i < files.length; ++i) {

            filenames.push(files[i]);
        }

        var attributes = {

            filenames: filenames

        };

        this.filenameContainer.html(this.template.filenameContainer(attributes));
    },

    renderBottomContainer: function () {

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON(),

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput);
    },

    renderSnapshotArea: function (snapshot, x, radius) {

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);
    },

    renderSnapshotFile: function (snapshot, index, file, x, y, radius, modified) {

        // Snapshot element
        var snapshotElement = this.paper.circle(x, y, radius);

        $(snapshotElement.node).attr('class', modified ? 'snapshot-modified' : 'snapshot');

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        var isSelected = index === this.currentSnapshotIndex && file.getName() === this.filename;
        $(snapshotClickArea.node).attr('class', isSelected ? 'area snapshot selected' : 'area snapshot');

        // Tooltip
        $(snapshotClickArea.node).attr({

            'data-toggle': 'tooltip',
            'title': moment(new Date(snapshot.get('snapshotTime'))).format('D.M.YYYY HH.mm'),
            'data-container': 'body'

        });

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(snapshotClickArea.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(snapshotClickArea.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
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

        var files = this.collection.getFiles();

        // File list affects the canvas size so it should be rendered first
        this.renderFilenameContainer(files);

        var baseHeight = 81;
        var lineSpacing = 60;
        var height = baseHeight + lineSpacing * (files.length - 1);

        this.paper.setSize('100%', height)

        // Clear paper
        this.paper.clear();

        // Y-coordinate of the first line
        var firstLineY = baseHeight / 2 + 3;

        var leftOffset = 100;
        var rightOffset = 0;
        var x = 0;

        var self = this;

        var fileLineStarts = [];

        this.snapshotPositions = [];

        this.collection.each(function (snapshot, index) {

            var radius = 15;

            var distance = 100;
            x += radius * 2;

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

            var currentFiles = [];

            self.snapshotPositions.push(x);

            self.renderSnapshotArea(snapshot, x, radius);
            self.renderSnapshotIndex(index, x);

            // Current snapshot
            if (index === self.currentSnapshotIndex) {

                // Render pointer on current snapshot
                self.renderPointer(x, radius);
            }

            snapshot.get('files').each(function (file) {

                var fileIdx = files.indexOf(file.getName());
                currentFiles[fileIdx] = file.getName();

                var diffs = self.differences[index][file.getName()];

                var y = firstLineY + fileIdx * lineSpacing;
                self.renderSnapshotFile(snapshot, index, file, x, y, radius, diffs.getCount().total() !== 0);
                self.renderChanges(index, diffs, x-distance-radius, y, file);
            });

            self.renderFileLines(fileLineStarts, currentFiles, index, files.length, firstLineY, lineSpacing);

        });

        // Render file lines that have not ended yet
        this.renderFileLines(fileLineStarts, [], this.snapshotPositions.length, files.length, firstLineY, lineSpacing);

        // Show dashed line where file doesn't exist
        for (var i = 0; i < files.length; i++) {

            this.renderTimeline(leftOffset, firstLineY + lineSpacing * i, x, true);
        }

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Focus
        this.focus();

        this.renderBottomContainer();
    },

    renderFileLines: function(fileLineStarts, currentFiles, index, n, firstLineY, lineSpacing) {

        for (var i = 0; i < n; i++) {

            if (currentFiles[i] && !fileLineStarts[i]) {

                fileLineStarts[i] = this.snapshotPositions[index];
            }

            if (!currentFiles[i] && fileLineStarts[i]) {

                this.renderTimeline(fileLineStarts[i], firstLineY + lineSpacing * i, this.snapshotPositions[index - 1]);
                fileLineStarts[i] = undefined;
            }
        }
    },

    renderChanges: function (index, diffs, x, y, file) {

        var total = file.lines();
        var inserted = Math.round((diffs.getCount().insert / total) * 100);
        var deleted = Math.round((diffs.getCount()['delete'] / total) * 100);
        var modified = Math.round((diffs.getCount().replace / total) * 100);

        var totalLength = inserted + deleted + modified;
        if (totalLength > 100) {
            inserted = inserted * (100 / totalLength);
            deleted = deleted * (100 / totalLength);
            modified = modified * (100 / totalLength);
        }

        if(inserted && inserted !== 0) {
            var ins = this.paper.path('M ' + x + ' ' + y + ' L ' + (x+inserted) + ' ' + y);
            $(ins.node).attr('class', 'timeline-insert');
            x += inserted;
            ins.toBack();
        }

        if (deleted && deleted !== 0) {
            var del = this.paper.path('M ' + x + ' ' + y + ' L ' + (x+deleted) + ' ' + y);
            $(del.node).attr('class', 'timeline-delete');
            x += deleted;
            del.toBack();
        }

        if (modified && modified !== 0) {
            var mod = this.paper.path('M ' + x + ' ' + y + ' L ' + (x+modified) + ' ' + y);
            $(mod.node).attr('class', 'timeline-modify');
            mod.toBack();
        }

    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Start spinner
        this.startSpinner();

        var self = this;

        // Calculate differences between snapshots before continuing
        this.collection.getDifferences(function (differences) {

            self.differences = differences;

            self.currentSnapshotIndex = currentSnapshotIndex;
            self.filename = filename;

            // Stop spinner
            self.stopSpinner();

            // Render if user is not dragging
            if (!self.dragging) {
                self.render();
            }
        });
    },

    /* Events */

    didResize: function () {

        // Relocate spinner if necessary
        if (this.spinner) {
            this.stopSpinner();
            this.startSpinner();
        }

        // Rendering finished
        if (this.snapshotPositions.length === this.collection.length) {

            // Cx of the current snapshot element
            var cx = this.snapshotPositions[this.currentSnapshotIndex];

            this.render();
            this.centerOn(cx);
        }
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width();
        var canvasOffset = $(this.paper.canvas).offset();

        var leftOffset = canvasOffset.left;
        var rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startSpinner: function () {

        if (this.spinner) {
            return;
        }

        this.spinner = new Spinner({

            lines:      13,
            length:     4,
            width:      4,
            radius:     10,
            corners:    1,
            rotate:     0,
            direction:  1,
            color:      'rgba(0, 0, 0, 0.4)',
            speed:      0.8,
            trail:      60,
            shadow:     false,
            hwaccel:    false,
            className: 'spinner',
            zIndex:     2e9,
            top:        'auto',
            left:       'auto'

        }).spin(this.$el.get(0));
    },

    stopSpinner: function () {

        if (this.spinner) {
            this.spinner.stop();
            this.spinner = null;
        }
    },

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
