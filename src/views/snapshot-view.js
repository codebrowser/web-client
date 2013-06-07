codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Snapshot,

    events: {

        'click #previous': 'previous',
        'click #next':     'next'
    },

    initialize: function () {

        this.model = new codebrowser.model.Snapshot();
        this.collection = new codebrowser.collection.SnapshotCollection();

        // Editor
        this.editorView = new codebrowser.view.EditorView();

        this.render();
    },

    render: function () {

        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exerciseId: this.collection.exerciseId

        }

        // Template
        var output = this.template($.extend(this.model.toJSON(), attributes));

        this.$el.html(output);

        var index = this.collection.indexOf(this.model);

        // First snapshot, disable button for previous
        if (index === 0) {
            $('#previous').attr('disabled', true);
        }

        // Last snapshot, disable button for next
        if (index === this.collection.length - 1) {
            $('#next').attr('disabled', true);
        }
    },

    setModel: function (model, fileId) {

        this.model = model;
        this.render();

        // Update editor
        this.editorView.setElement('#editor-container');

        // Show first file if no fileId is specified
        if (!fileId) {
            this.editorView.setModel(this.model.get('files').at(0));
        } else {
            this.editorView.setModel(this.model.get('files').get(fileId));
        }
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

    previous: function (event) {

        event.preventDefault();

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        this.navigate(previous.id);
    },

    next: function (event) {

        event.preventDefault();

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        this.navigate(next.id);
    }
});
