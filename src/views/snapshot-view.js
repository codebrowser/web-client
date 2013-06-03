codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,

    template: function () {

        return $('#snapshot-template').html();
    },

    events: {

        'click #previous': 'previous',
        'click #next':     'next'
    },

    initialize: function () {

        // NOTE: Do we need this?
        this.model = new codebrowser.model.Snapshot();

        this.render();

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: '#editor-container' });
    },

    render: function () {

        // Template
        var template = Handlebars.compile(this.template());
        var output = template(this.model.toJSON());

        this.$el.html(output);
    },

    setModel: function (model) {

        this.model = model;
        this.render();

        // NOTE: Do we need this?
        this.editorView.el = '#editor-container';

        // Update editor
        this.editorView.setModel(this.model.get('files').at(0));
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

        // TODO: Underflow, disable button
        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        this.navigate(previous.id);
    },

    next: function (event) {

        event.preventDefault();

        // TODO: Overflow, disable button
        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        this.navigate(next.id);
    }
});
