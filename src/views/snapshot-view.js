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

    visualizations: null,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        this.visualizations = this._initializeVisualizations();

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

        var visualizations = {};

        visualizations.timeline = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        visualizations.tree = new codebrowser.view.SnapshotsTreeView({ parentView: this });
        visualizations.data = new codebrowser.view.SnapshotsDataView({ parentView: this });
        visualizations.concepts = new codebrowser.view.SnapshotsConceptsView();

        visualizations.timeline.buttonSelector = '#toggleTimeline';
        visualizations.tree.buttonSelector = '#toggleTree';
        visualizations.data.buttonSelector = '#toggleData';
        visualizations.concepts.buttonSelector = '#toggleConcepts';

        for (var key in visualizations) {
            if (visualizations.hasOwnProperty(key)) {
                var visualization = visualizations[key];
                if (!visualization.isActive) {
                    visualization.$el.hide();
                }
                this.$el.append(visualization.el);
            }
        }

        return visualizations;

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

        // Visualizations teardown
        for (var visualization in this.visualizations) {
            if (this.visualizations.hasOwnProperty(visualization)) {
                this.visualizations[visualization].remove();
            }
        }

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
        for (var key in this.visualizations) {
            var visualization = this.visualizations[key];
            if (this.visualizations.hasOwnProperty(key) && visualization.isActive) {
                $(visualization.buttonSelector, navigationContainerOutput).addClass('active');
            }
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

        var visualizations = this.visualizations;

        if (visualizations.timeline.isActive) {
            visualizations.timeline.update(this.collection, index, filename, this.courseRoute);
        }

        if (visualizations.tree.isActive) {
            visualizations.tree.update(this.collection, index, filename, this.courseRoute);
        }

        if (visualizations.data.isActive) {
            visualizations.data.update(this.collection, index);
        }

        if (visualizations.concepts.isActive) {
            visualizations.concepts.update(this.model);
        }

    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        if (this.visualizations.timeline.isActive) {
            this.visualizations.timeline.didResize();
        }
        if (this.visualizations.tree.isActive) {
            this.visualizations.tree.didResize();
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

        $(this.visualizations.timeline.buttonSelector).toggleClass('active');

        this.visualizations.timeline.toggle();

        if (this.visualizations.tree.isActive && this.visualizations.timeline.isActive) {
            this.toggleTree();
        }

        if (this.visualizations.timeline.isActive) {
            this.visualizations.timeline.update(this.collection, this.collection.indexOf(this.model), this.file.get('name'), this.courseRoute);
        }

    },

    toggleTree: function () {

        $(this.visualizations.tree.buttonSelector).toggleClass('active');

        this.visualizations.tree.toggle();

        if (this.visualizations.tree.isActive && this.visualizations.timeline.isActive) {
            this.toggleTimeline();
        }

        if (this.visualizations.tree.isActive) {
            this.visualizations.tree.update(this.collection, this.collection.indexOf(this.model), this.file.get('name'), this.courseRoute);
        }

    },

    toggleData: function () {

        $(this.visualizations.data.buttonSelector).toggleClass('active');

        this.visualizations.data.toggle();

        // Update Data view
        if (this.visualizations.data.isActive) {
            this.visualizations.data.update(
                this.collection,
                this.collection.indexOf(this.model)
            );
        }
    },

    toggleConcepts: function () {

        $(this.visualizations.data.buttonSelector).toggleClass('active');

        this.visualizations.concepts.toggle();

        // Update Concepts view
        if (this.visualizations.concepts.isActive) {
            this.visualizations.concepts.update(this.model);
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
