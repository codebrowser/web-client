codebrowser.view.RootView = Backbone.View.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    render: function () {

        var output = this.template({ showStudentGroups : this.showStudentGroups });
        this.$el.html(output);

        return this;
    }
});
