codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #toggleConcepts': 'toggleConcepts',
        'click #toggleTimeline': 'toggleTimeline',
        'click #toggleBrowser':  'toggleBrowser',
        'click #toggleTree':     'toggleTree',
        'click #toggleData':     'toggleData',
        'click #split':          'split',
        'click #diff':           'diff',
        'click #first':          'first',
        'click #previous':       'previous',
        'click #next':           'next',
        'click #last':           'last'

    },

    /* Routing */
    courseRoute: false,

    /* Browser */
    browser: true,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        this._initializeVisualizations();

        // Navigation
        this.navigationContainer = $('<div>', { id: 'snapshot-navigation-container' });
        this.$el.append(this.navigationContainer);

        this._initializeContentContainer();

        // Bind resize
        $(window).resize($.proxy(this.resize, this));

        // Bind keydown
        $(document).keydown($.proxy(this.keydown, this));
    },

    _initializeVisualizations: function() {

        // Timeline
        this.snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        this.$el.append(this.snapshotsTimelineView.el);

        // Snapshot tree
        this.snapshotsTreeView = new codebrowser.view.SnapshotsTreeView({ parentView: this });
        this.$el.append(this.snapshotsTreeView.el);

        // Snapshot data view
        this.snapshotsDataView = new codebrowser.view.SnapshotsDataView({ parentView: this });
        this.$el.append(this.snapshotsDataView.el);

        // Concepts
        this.snapshotsConceptsView = new codebrowser.view.SnapshotsConceptsView();
        this.$el.append(this.snapshotsConceptsView.$el);

    },

    _initializeContentContainer: function() {

        // Content container
        var contentContainer = $('<div>', { id: 'snapshot-content-container' });

        // Browser
        this.snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: this });
        contentContainer.append(this.snapshotBrowserView.el);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        contentContainer.append(this.editorView.el);

        this.$el.append(contentContainer);

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

        // Remove data view
        this.snapshotsDataView.remove();

        // Remove browser view
        this.snapshotBrowserView.remove();

        // Remove editor
        this.editorView.remove();

        // Remove concepts view
        this.snapshotsConceptsView.remove();

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

        this.renderButtons(navigationContainerOutput, index);

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    renderButtons: function (navigationContainerOutput, index) {

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
        if (this.snapshotsTimelineView.isActive === true) {
            $('#toggleTimeline', navigationContainerOutput).addClass('active');
        }

        // Data view toggle buttons
        if (this.snapshotsDataView.isActive === true) {
            $('#toggleData', navigationContainerOutput).addClass('active');
        } else {
            $('#snapshots-data-container').hide();
        }

        if (this.snapshotsTreeView.isActive === true) {
            $('#toggleTree', navigationContainerOutput).addClass('active');
        }

        if (this.snapshotsConceptsView.isActive === true) {
            $('#toggleConcepts', navigationContainerOutput).addClass('active');
        } else {
            $('#snapshots-concepts-container').hide();
        }
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

        var index = this.collection.indexOf(snapshot);

        // Previous snapshot, use the current snapshot as the previous, if no previous available
        var previousSnapshot = !this.collection.at(index - 1) ? this.model : this.collection.at(index - 1);

        // Determine current file
        this.file = this.model.get('files').get(fileId);
        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Show view if necessary
        this.$el.show();
        this.updateVisualizations(index, filename);

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        this.render();
    },

    updateVisualizations: function (index, filename) {

        // Update timeline if it's activated
        if (this.snapshotsTimelineView.isActive) {
            this.snapshotsTimelineView.update(this.collection, index, filename, this.courseRoute);
        }

        // Update tree view if active
        if (this.snapshotsTreeView.isActive) {
            this.snapshotsTreeView.update(this.collection, index, filename, this.courseRoute);
        }

        // Update dataview
        if (this.snapshotsDataView.isActive) {
            this.snapshotsDataView.update(this.collection, index);
        }

        // Update concepts if it's activated
        if (this.snapshotsConceptsView.isActive) {
            this.snapshotsConceptsView.update(this.model);
        }

    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        if (this.snapshotsTimelineView.isActive) {
            this.snapshotsTimelineView.didResize();
        }
        if (this.snapshotsTreeView.isActive) {
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

        $('#toggleTimeline').toggleClass('active');

        this.snapshotsTimelineView.toggle();

        if (this.snapshotsTreeView.isActive && this.snapshotsTimelineView.isActive) {
            this.toggleTree();
        } else {
            this.updateVisualizations(this.collection.indexOf(this.model), this.file.get('name'));
        }
    },

    toggleTree: function () {

        $('#toggleTree').toggleClass('active');

        this.snapshotsTreeView.toggle();

        if (this.snapshotsTreeView.isActive && this.snapshotsTimelineView.isActive) {
            this.toggleTimeline();
        } else {
            this.updateVisualizations(this.collection.indexOf(this.model), this.file.get('name'));
        }
    },

    toggleData: function () {

        $('#toggleData').toggleClass('active');

        this.snapshotsDataView.toggle();

        // Update Data view
        if (this.snapshotsDataView.isActive) {
            this.snapshotsDataView.update(
                this.collection,
                this.collection.indexOf(this.model)
            );
        }
    },

    toggleConcepts: function () {

        $('#toggleConcepts').toggleClass('active');

        this.snapshotsConceptsView.toggle();

        // Update Concepts view
        if (this.snapshotsConceptsView.isActive) {
            this.snapshotsConceptsView.update(this.model);
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
    }

});
