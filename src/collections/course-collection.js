codebrowser.collections.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Course,
    url: config.apiRoot + 'courses'

});
