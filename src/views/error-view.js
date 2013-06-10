codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Error,

    initialize: function () {

        this.render();
    },

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
