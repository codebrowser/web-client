codebrowser.view.NavigationView = Backbone.View.extend({

    id: 'navigation-container',
    template: Handlebars.templates.Navigation,

    /* Render */

    render: function () {

        var attributes = {

            showComments: localStorage.getItem('config.comments') === 'true' ? true : false,
            showTags: localStorage.getItem('config.tagnames') === 'true' ? true : false,
            showTagCategories: localStorage.getItem('config.tagcategories') === 'true' ? true : false,
            showStudentGroups: localStorage.getItem('config.studentgroups') === 'true' ? true : false
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        return this;

    },

});
