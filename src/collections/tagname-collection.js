codebrowser.collection.TagNameCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagName,

    url: config.api.main.root + 'tagnames',
});
