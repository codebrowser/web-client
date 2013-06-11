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

        // Index of current model
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

        // First snapshot, disable button for previous
        if (index === 0) {
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable button for next
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Attach to DOM
        this.navigationContainer.html(navigationContainerOutput);
    },

    setModel: function (model, fileId) {

        this.model = model;

        // Show first file if no fileId is specified
        if (!fileId) {
            this.editorView.setModel(this.model.get('files').at(0));
        } else {
            this.editorView.setModel(this.model.get('files').get(fileId));
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
