codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #toggleConceptBubbles': 'toggleConceptBubbles',
        'click #toggleConceptHeatmap': 'toggleConceptHeatmap',
        'click #toggleTimeline':       'toggleTimeline',
        'click #toggleBrowser':        'toggleBrowser',
        'click #toggleTree':           'toggleTree',
        'click #toggleTestOutput':     'toggleTestOutput',
        'click #split':                'split',
        'click #diff':                 'diff',
        'click #first':                'first',
        'click #previous':             'previous',
        'click #next':                 'next',
        'click #last':                 'last'

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


        // Enable tour button on navigation view
        if (codebrowser && codebrowser.navigation) {

            var self = this;

            codebrowser.navigation.enableTour(function() {
                self.startTour();
            });
        }
    },

    _initializeVisualizations: function() {

        var visualizations = {};

        visualizations.timeline = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        visualizations.tree = new codebrowser.view.SnapshotsTreeView({ parentView: this });
        visualizations.testOutput = new codebrowser.view.SnapshotsDataView({ parentView: this });
        visualizations.conceptBubbles = new codebrowser.view.SnapshotsConceptBubbleView({ parentView: this });
        visualizations.conceptHeatmap = new codebrowser.view.SnapshotsConceptHeatmapView({ parentView: this });

        visualizations.timeline.buttonSelector = '#toggleTimeline';
        visualizations.tree.buttonSelector = '#toggleTree';
        visualizations.testOutput.buttonSelector = '#toggleTestOutput';
        visualizations.conceptBubbles.buttonSelector = '#toggleConceptBubbles';
        visualizations.conceptHeatmap.buttonSelector = '#toggleConceptHeatmap';

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

        // Comments
        if (localStorage.getItem('config.comments') === 'true') {

            this.snapshotCommentsView = new codebrowser.view.SnapshotCommentsView();
            contentContainer.append(this.snapshotCommentsView.el);
        }

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

        // Comment view
        if (localStorage.getItem('config.comments') === 'true') {
            this.snapshotCommentsView.remove();
        }

        // Disable tour button on navigation view
        codebrowser.navigation.disableTour();

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
            if (this.visualizations.hasOwnProperty(key) && visualization.isDisabled) {
                $(visualization.buttonSelector, navigationContainerOutput).prop('disabled', true );
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

    renderSnapshotSlider: function(index) {

        var that = this;

        this.snapshotSlider = new codebrowser.helper.SnapshotSlider(index, this.collection.size(), function(i) {
            that.navigateToIndex(i);
        });

        this.snapshotSliderContainer.html( this.snapshotSlider.$html );

        this.snapshotSlider.rendered();
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
        var backendFile = this.collection.at(index).get('files').findWhere({ name: filename }).attributes.diffs;
        this.editorView.update(previousFile || this.file, this.file, backendFile);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        // Update comments view
        if (localStorage.getItem('config.comments') === 'true') {
            this.snapshotCommentsView.update(this.model);
        }

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

        if (visualizations.testOutput.isActive) {
            visualizations.testOutput.update(this.collection, index);
        }

        if (visualizations.conceptBubbles.isActive) {
            visualizations.conceptBubbles.update(this.model);
        }

        if (visualizations.conceptHeatmap.isActive) {
            visualizations.conceptHeatmap.update(this.model, index);
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

    toggleTestOutput: function () {

        $(this.visualizations.testOutput.buttonSelector).toggleClass('active');

        this.visualizations.testOutput.toggle();

        // Update Data view
        if (this.visualizations.testOutput.isActive) {
            this.visualizations.testOutput.update(
                this.collection,
                this.collection.indexOf(this.model)
            );
        }
    },

    toggleConceptBubbles: function () {

        $(this.visualizations.conceptBubbles.buttonSelector).toggleClass('active');

        this.visualizations.conceptBubbles.toggle();

        // Update Concepts view
        if (this.visualizations.conceptBubbles.isActive) {
            this.visualizations.conceptBubbles.update(this.model);
        }
    },

    toggleConceptHeatmap: function () {

        $(this.visualizations.conceptHeatmap.buttonSelector).toggleClass('active');

        this.visualizations.conceptHeatmap.toggle();

        // Update Concepts view
        if (this.visualizations.conceptHeatmap.isActive) {
            this.visualizations.conceptHeatmap.update(this.model);
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

        // Reset introJs tour if necessary
        this.resetTour();

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        if (this.courseRoute) {
            codebrowser.app.snapshotRouter.navigate('#/courses/' +
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

            codebrowser.app.snapshotRouter.navigate('#/students/' +
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

        this.navigateToIndex(0);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);

        this.navigateToIndex(index - 1);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);

        this.navigateToIndex(index + 1);
    },

    last: function () {

        var last = this.collection.size() - 1;

        this.navigateToIndex(last);
    },

    navigateToIndex: function(index) {

        var snapshot = this.collection.at(index);

        if (!snapshot) {
            return;
        }

        var file = snapshot.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(snapshot, file);
    },

    startTour: function () {

        var self = this;
        var intro = introJs();

        // Set elements and guide templates
        intro.setOptions({
            keyboardNavigation: false,
            steps: [
                {
                    element: '#editor-container',
                    intro: Handlebars.templates.SnapshotEditorIntro(),
                    position: 'right'
                },
                {
                    element: 'a[href="#editor-settings"]',
                    intro: Handlebars.templates.SnapshotEditorSettingsIntro(),
                    position: 'left'
                },
                {
                    element: '#editor-modes',
                    intro: Handlebars.templates.SnapshotEditorModesIntro()
                },
                {
                    element: '#snapshot-navi',
                    intro: Handlebars.templates.SnapshotNavigationIntro()
                },
                {
                    element: '#toggleTimeline',
                    intro: Handlebars.templates.SnapshotTimelineIntro()
                },
                {
                    element: '#toggleTree',
                    intro: Handlebars.templates.SnapshotTreeIntro()
                },
                {
                    element: '#toggleTestOutput',
                    intro: Handlebars.templates.SnapshotDataIntro()
                },
                {
                    element: '#toggleConceptBubbles',
                    intro: Handlebars.templates.SnapshotConceptsBubbleIntro()
                },
                {
                    element: '#toggleConceptHeatmap',
                    intro: Handlebars.templates.SnapshotConceptsHeatmapIntro()
                }
            ]
        });

        // Set tour in progess flag
        this.tourInProgress = true;

        // Register callbacks
        intro.onexit(function() {
            self.tourInProgress = false;
        });
        intro.oncomplete(function() {
            self.tourInProgress = false;
        });

        intro.start();
    },

    resetTour: function () {

        if (this.tourInProgress === true) {

            this.tourInProgress = false;
            introJs().exit();
        }
    }
});
