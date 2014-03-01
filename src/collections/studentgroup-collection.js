codebrowser.collection.StudentGroupCollection = Backbone.Collection.extend({

    model: codebrowser.model.StudentGroup,

    url: function () {

        return config.api.main.root + 'studentgroups';
    },
});
