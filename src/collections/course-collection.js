codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,
    url: config.api.main.root + 'courses',

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
        }
    }
});
