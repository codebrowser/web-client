codebrowser.view.RootView = Backbone.View.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    render: function () {

        var attributes = {

            showStudentGroups : this.showStudentGroups === 'true' ? true : false,
            showTags : this.showTags === 'true' ? true : false,
            showTagCategories : this.showTagCategories === 'true' ? true : false,
            showComments : this.showComments === 'true' ? true : false

        }

        var output = this.template(attributes);
        this.$el.html(output);

        return this;
    }
});
