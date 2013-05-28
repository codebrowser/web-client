codebrowser.collections.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.models.Student,
    url: config.apiRoot + 'students'

});
