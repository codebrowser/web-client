codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'catch'

    },

    catch: function () {

        $(config.view.container).empty();
        console.log('Catched!');
    }
});
