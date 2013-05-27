codebrowser.collections.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.models.Student,

    url: function () {

        return config.apiRoot + 'students';
    }
});
