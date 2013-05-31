codebrowser.router.BaseRouter = Backbone.Router.extend({

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView({ el: config.view.container });
    },

    routes: {

        '*notFound': 'catch'

    },

    catch: function () {

        this.errorView.render();
        console.log('Catched!');
    }
});
