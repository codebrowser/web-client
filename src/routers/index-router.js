codebrowser.router.IndexRouter = Backbone.Router.extend({

    initialize: function(options) {
        this.layout = options.layout;
    },

    root: function() {
        this.layout.renderChild(new codebrowser.view.RootView());
    }

});