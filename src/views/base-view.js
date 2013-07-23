codebrowser.view.BaseView = Backbone.View.extend({

    id: 'list-container',
    template: Handlebars.templates.BaseContainer,

    /* Render */

    render: function () {

        // Template
        var output = this.template();

        this.$el.html(output);
    }
});
