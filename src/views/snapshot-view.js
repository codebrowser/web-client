codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Snapshot,

    events: {

        'click #first':    'first',
        'click #previous': 'previous',
        'click #next':     'next',
        'click #last':     'last'

    },

    initialize: function () {

        this.$el.empty();

        // Create divs for elements
        this.navigationElement = $('<div>');
        this.editorElement = $('<div>', {id: 'editor-container'});

        this.$el.append(this.navigationElement);
        this.$el.append(this.editorElement);

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: this.editorElement });
    },

    render: function () {

        // Index of current model
        var index = this.collection.indexOf(this.model);

        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exerciseId: this.collection.exerciseId

        }

        // Template
        var output = $(this.template($.extend(this.model.toJSON(), attributes)));

        // First snapshot, disable button for previous
        if (index === 0) {
            $('#first', output).attr('disabled', true);
            $('#previous', output).attr('disabled', true);
        }

        // Last snapshot, disable button for next
        if (index === this.collection.length - 1) {
            $('#next', output).attr('disabled', true);
            $('#last', output).attr('disabled', true);
        }

        // Add to DOM
        this.navigationElement.html(output);
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

        var last = this.collection.at(this.collection.length-1);

        this.navigate(last.id);
    }
});
