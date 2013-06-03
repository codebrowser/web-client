codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,

    template: function () {

        return $('#error-template').html();
    },

    render: function() {

        this.$el.html(this.template);
    }
});
