codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Error,

    render: function() {

        this.$el.html(this.template);
    }
});
