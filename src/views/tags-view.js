codebrowser.view.TagsView = Backbone.View.extend({

    id: 'tags-container',
    template: Handlebars.templates.TagsContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tagNameText: this.tagName.get('name'),
            tags: this.collection.toJSON()

        }

        if (this.tagCategory) {
            attributes = _.extend(attributes, { tagCategory: this.tagCategory.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
