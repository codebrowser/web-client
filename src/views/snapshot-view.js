codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #toggleTimeline': 'toggleTimeline',
        'click #toggleTree':    'toggleTree',
        'click #toggleBrowser': 'toggleBrowser',
        'click #split':         'split',
        'click #diff':          'diff',
        'click #first':         'first',
        'click #previous':      'previous',
        'click #next':          'next',
        'click #last':          'last'

    },

    /* Routing */
    courseRoute: false,

    /* Visualization toggle */
    showTimeline: true,
    showTree: true,

    /* Browser */
    browser: true,

    /* Initialise */

    initialize: function () {

        this.showTimeline = this._getLocalStorageValue('showTimeline', true) === 'true';
        this.showTree = this._getLocalStorageValue('showTree', false) === 'true';

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        // Timeline
        this.snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        this.$el.append(this.snapshotsTimelineView.el);

        // Snapshot tree
        this.snapshotsTreeView = new codebrowser.view.SnapshotsTreeView({ parentView: this });
        this.$el.append(this.snapshotsTreeView.el);

        // Navigation
        this.navigationContainer = $('<div>', { id: 'snapshot-navigation-container' });
        this.$el.append(this.navigationContainer);

        // Content container
        var contentContainer = $('<div>', { id: 'snapshot-content-container' });

        // Browser
        this.snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: this });
        contentContainer.append(this.snapshotBrowserView.el);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        contentContainer.append(this.editorView.el);

        this.$el.append(contentContainer);

        // Bind resize
        $(window).resize($.proxy(this.resize, this));

        // Bind keydown
        $(document).keydown($.proxy(this.keydown, this));
    },

    /* Remove */

    remove: function () {

        // Unbind resize
        $(window).off('resize', this.resize);

        // Unbind keydown
        $(document).off('keydown', this.keydown);

        // Remove timeline
        this.snapshotsTimelineView.remove();

        // Remove tree view
        this.snapshotsTreeView.remove();

        // Remove browser view
        this.snapshotBrowserView.remove();

        // Remove editor
        this.editorView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Render */

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        this.renderNavigationBar(index);
        this.renderNavigation(index);

    },

    renderNavigation: function(index) {

        // View attributes
        var attributes = {
            current: index + 1,
            total: this.collection.length
        };

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(attributes));

        // Browser is enabled, set toggleBrowser button as active
        if (this.browser) {
            $('#toggleBrowser', navigationContainerOutput).addClass('active');
        }

        // Split view is enabled, set split button as active
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        }

        // Disable split button if editor can not be split
        if (!this.editorView.canSplit()) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // Diff is enabled, set diff button as active
        if (this.editorView.diff) {
            $('#diff', navigationContainerOutput).addClass('active');
        }

        // First snapshot, disable the buttons for first and previous
        if (index === 0) {
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable the buttons for next and last
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Visualization toggle buttons
        if (this.showTimeline === true) {
            $('#toggleTimeline', navigationContainerOutput).addClass('active');
        }

        if (this.showTree === true) {
            $('#toggleTree', navigationContainerOutput).addClass('active');
        }

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    renderNavigationBar: function(index) {

        // Template for navigation bar container
        var navigationbarContainerOutput = $(this.template.navigationbarContainer(_.extend(
            this.model.toJSON(),
            {
                exercise: this.collection.at(index).get('exercise').toJSON(),
                student:  this.student.toJSON(),
                courseRoute: this.courseRoute
            }
        )));

        // Update navigation bar container
        this.navigationbarContainer.html(navigationbarContainerOutput);

    },

    /* Update */

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Restore browser state if necessary
        if (this.browser) {
            this.toggleBrowser(null, localStorage.getItem(config.storage.view.SnapshotView.browser) === 'true');
        }

        // Previous snapshot
        var index = this.collection.indexOf(snapshot);
        var previousSnapshot = this.collection.at(index - 1);

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;
        }

        // Determine current file
        this.file = this.model.get('files').get(fileId);
        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Show view if necessary
        this.$el.show();

        // Update timeline if it's activated
        if (this.showTimeline) {
            this.snapshotsTimelineView.update(this.collection, index, filename, this.courseRoute);
        }

        // Update tree view if active
        if (this.showTree) {
            this.snapshotsTreeView.update(this.collection, index, filename, this.courseRoute);
        }

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        this.render();
    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        if (this.showTimeline) {
            this.snapshotsTimelineView.didResize();
        }
        if (this.showTreeView) {
            this.snapshotsTreeView.didResize();
        }
        this.editorView.didResize();
    },

    keydown: function (event) {

        // Left
        if (event.keyCode === 37) {
            this.previous();
        }

        // Right
        if (event.keyCode === 39) {
            this.next();
        }
    },

    /* Actions */

    toggleBrowser: function (event, browser) {

        // Use parameter if given, otherwise toggle internal browser state
        if (browser !== undefined) {

            this.browser = browser;

        } else {

            this.browser = !this.browser;

            // Store browser state
            localStorage.setItem(config.storage.view.SnapshotView.browser, this.browser);
        }

        // Enable browser
        if (this.browser) {

            // Move editor view
            this.editorView.$el.css('margin-left', this.snapshotBrowserView.$el.width() + 30);
            this.editorView.didResize();

            this.snapshotBrowserView.$el.show();

            return;
        }

        // Disable browser
        this.snapshotBrowserView.$el.hide();

        // Move editor view
        this.editorView.$el.css('margin-left', 0);
        this.editorView.didResize();
    },

    toggleTimeline: function () {

        this.showTimeline = !this.showTimeline;
        $('#toggleTimeline').toggleClass('active');

        // Store state
        localStorage.setItem('showTimeline', this.showTimeline);
        localStorage.setItem('showTree', this.showTree);

        $('#snapshots-timeline-container').slideToggle();

        if (this.showTree && this.showTimeline) {
            this.toggleTree();
        } else {
            this._updateVisualizations();
        }
    },

    toggleTree: function () {

        this.showTree = !this.showTree;
        $('#toggleTree').toggleClass('active');

        // Store state
        localStorage.setItem('showTree', this.showTree);

        $('#snapshots-tree-container').slideToggle();

        if (this.showTree && this.showTimeline) {
            this.toggleTimeline();
        } else {
            this._updateVisualizations();
        }
    },

    split: function () {

        this.editorView.toggleSplit();

    },

    diff: function () {

        this.editorView.toggleDiff();
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

    },

    /* Actions - Navigation */

    navigate: function (snapshot, file, options) {

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        if (this.courseRoute) {
            codebrowser.app.snapshot.navigate('#/courses/' +
                this.collection.courseId +
                '/exercises/' +
                this.collection.exerciseId +
                '/students/' +
                this.collection.studentId +
                '/snapshots/' +
                snapshot.id +
                '/files/' +
                file.id, { replace: !options ? options : options.replace });
        } else {

            codebrowser.app.snapshot.navigate('#/students/' +
                this.collection.studentId +
                '/courses/' +
                this.collection.courseId +
                '/exercises/' +
                this.collection.exerciseId +
                '/snapshots/' +
                snapshot.id +
                '/files/' +
                file.id, { replace: !options ? options : options.replace });
        }
    },

    first: function () {

        var first = this.collection.first();
        var file = first.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(first, file);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        if (!previous) {
            return;
        }

        var file = previous.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(previous, file);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        if (!next) {
            return;
        }

        var file = next.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(next, file);
    },

    last: function () {

        var last = this.collection.last();
        var file = last.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(last, file);
    },

    _getLocalStorageValue: function (name, defaultValue) {

        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, defaultValue);
        }

        return localStorage.getItem(name);
    },

    _updateVisualizations: function() {

        // Update Timeline
        if (this.showTimeline) {
            this.snapshotsTimelineView.update(
                this.collection,
                this.collection.indexOf(this.model),
                this.file.get('name'),
                this.courseRoute
            );
        }

        // Update tree view
        if (this.showTree) {
            this.snapshotsTreeView.update(
                this.collection,
                this.collection.indexOf(this.model),
                this.file.get('name'),
                this.courseRoute
            );
        }
    }
});
