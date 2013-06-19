codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,

    template: {

        navigationContainer: Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #split':    'split',
        'click #diff':     'diff',
        'click #first':    'first',
        'click #previous': 'previous',
        'click #next':     'next',
        'click #last':     'last'

    },

    initialize: function () {

        var self = this;

        // Snapshot container
        this.snapshotContainer = $('<div>', { id: 'snapshot-container' });

        // Create divs for elements
        this.navigationContainer = $('<div>', { id: 'navigation-container' });
        this.editorContainer = $('<div>', { id: 'editor-container' });

        // Append elements to parent
        this.snapshotContainer.append(this.navigationContainer);
        this.snapshotContainer.append(this.editorContainer);

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: this.editorContainer });

        // Bind keypress
        $(document).keydown(function () {

            // Left
            if (event.keyCode === 37) {
                self.previous();
            }

            // Right
            if (event.keyCode === 39) {
                self.next();
            }
        });
    },

    remove: function () {

        // Unbind keypress
        $(document).unbind();

        // Remove editor
        this.editorView.remove();

        // Empty container
        this.$el.empty();
        this.$el.undelegate();
    },

    render: function () {

        // Append wrapper to DOM
        this.$el.append(this.snapshotContainer);

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            current: index + 1,
            total: this.collection.length

        }

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(_.extend(this.model.toJSON(), attributes)));

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

        // Disable diff button if editor can not diff
        if (!this.editorView.canDiff()) {
            $('#diff', navigationContainerOutput).attr('disabled', true);
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

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    update: function (snapshot, fileId) {

        this.model = snapshot;

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

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        this.render();
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
    },

    navigate: function (snapshot, file) {

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        codebrowser.app.snapshot.navigate('#/students/' +
                                          this.collection.studentId +
                                          '/courses/' +
                                          this.collection.courseId +
                                          '/exercises/' +
                                          this.collection.exerciseId +
                                          '/snapshots/' +
                                          snapshot.id +
                                          '/files/' +
                                          file.id);
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
