codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'notFound'

    },

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView();
    },

    notFound: function () {

        console.log('Catched!');
        this.errorView.render();
    }
});
