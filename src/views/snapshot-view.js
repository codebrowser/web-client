codebrowser.view.SnapshotView = Backbone.View.extend({

    events: {

        'click #previous': 'previous',
        'click #next': 'next'
    },

    initialize: function () {

        this.model = new codebrowser.model.Snapshot();
        this.render();
    },

    render: function () {

        var template = Mustache.render($('#snapshot-template').html(), this.model.toJSON());
        $(this.el).html(template);
    },

    setModel: function (model) {

        this.model = model;
        this.model.convertTime();
        this.configURLs();
        this.render();
    },

    previous: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var prevModel = this.collection.at(index-1);

        this.navigate(prevModel.id);
        eventInformation.preventDefault();
    },

    next: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var nextModel = this.collection.at(index+1);

        this.navigate(nextModel.id);
        eventInformation.preventDefault();
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

    configURLs: function () {

        for (var i=0; i < this.model.get('files').length; ++i) {
            var file = this.model.get('files').at(i);
            file.set('url', '#/students/' +
                            this.collection.studentId +
                            '/courses/' +
                            this.collection.courseId +
                            '/exercises/' +
                            this.collection.exerciseId +
                            '/snapshots/' +
                            this.model.id +
                            '/files/' +
                            file.get('id'));
        }
    }
});