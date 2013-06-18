codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'notFound'

    },

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
    },

    notFound: function () {

        codebrowser.controller.ViewController.pushToView(this.errorView, true);
    }
});
