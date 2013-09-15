codebrowser.view.TagsView = Backbone.View.extend({

    id: 'tags-container',
    template: Handlebars.templates.TagsContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tags: this.collection.toJSON()

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
