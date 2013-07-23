codebrowser.view.RootView = Backbone.View.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    render: function () {

        // Template
        var output = this.template();

        this.$el.html(output);
    }
});
