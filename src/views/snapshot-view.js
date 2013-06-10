codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Snapshot,

    events: {

        'click #previous': 'previous',
        'click #next':     'next'

    },

    initialize: function () {

        this.$el.empty();
        this.$el.undelegate();

        // Create divs for elements
        this.navigationContainer = $('<div>');
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
            exerciseId: this.collection.exerciseId

        }

        // Template
        var output = $(this.template($.extend(this.model.toJSON(), attributes)));

        // First snapshot, disable button for previous
        if (index === 0) {
            $('#previous', output).attr('disabled', true);
        }

        // Last snapshot, disable button for next
        if (index === this.collection.length - 1) {
            $('#next', output).attr('disabled', true);
        }

        // Attach to DOM
        this.navigationContainer.html(output);
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

    previous: function () {

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        this.navigate(previous.id);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        this.navigate(next.id);
    }
});
