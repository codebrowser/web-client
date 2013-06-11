codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,

    template: {

        navigationContainer: Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #first':    'first',
        'click #previous': 'previous',
        'click #next':     'next',
        'click #last':     'last'

    },

    initialize: function () {

        // Empty container
        this.$el.empty();
        this.$el.undelegate();

        // Create divs for elements
        this.navigationContainer = $('<div>', { id: 'navigation-container' });
        this.editorContainer = $('<div>', { id: 'editor-container' });

        // Append elements to parent
        this.$el.append(this.navigationContainer);
        this.$el.append(this.editorContainer);

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: this.editorContainer });
    },

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exerciseId: this.collection.exerciseId,
            current: index + 1,
            total: this.collection.length

        }

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer($.extend(this.model.toJSON(), attributes)));

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

    update: function (previousSnapshot, snapshot, fileId) {

        this.model = snapshot;

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;

            this.editorView.toggleSplit(false);
        }

        // Show first file if no fileId is specified
        if (!fileId) {
            this.editorView.update(previousSnapshot.get('files').at(0), this.model.get('files').at(0));
        } else {

            // TODO: How to determine same file across snapshots?
            this.editorView.update(previousSnapshot.get('files').get(fileId), this.model.get('files').get(fileId));
        }

        this.render();
    },

    navigate: function (id) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          this.collection.studentId +
                                          '/courses/' +
                                          this.collection.courseId +
                                          '/exercises/' +
                                          this.collection.exerciseId +
                                          '/snapshots/' +
                                          id);
    },

    first: function () {

        var first = this.collection.at(0);

        this.navigate(first.id);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        this.navigate(previous.id);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        this.navigate(next.id);
    },

    last: function () {

        var last = this.collection.at(this.collection.length - 1);

        this.navigate(last.id);
    }
});
