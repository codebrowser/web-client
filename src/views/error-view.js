codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Error,

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
