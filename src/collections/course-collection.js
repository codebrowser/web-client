codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,
    url: config.api.main.root + 'courses'

});