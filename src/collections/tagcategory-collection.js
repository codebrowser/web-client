codebrowser.collection.TagCategoryCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagCategory,

    url: function () {

        return config.api.main.root +
               'tagcategories';
               
    },

    initialize: function () {

    }
});
