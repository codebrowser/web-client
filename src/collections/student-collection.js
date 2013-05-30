codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,
    url: config.api.main.root + 'students'

});
