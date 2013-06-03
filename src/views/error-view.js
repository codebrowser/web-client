codebrowser.view.ErrorView = Backbone.View.extend({

    el: '#container',

    template: function () {

        return $('#error-template').html();
    },

    render: function() {

        this.$el.html(this.template);
    }
});
