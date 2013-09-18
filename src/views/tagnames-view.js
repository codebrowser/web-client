codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tagNames: this.collection.toJSON()
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
