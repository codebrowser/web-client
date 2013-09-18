codebrowser.collection.TagNameCollection = Backbone.Collection.extend({

    model: codebrowser.model.Tag,

    url: config.api.main.root + 'tagnames',
});
