codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'catch'

    },

    catch: function () {

        $('#container').empty();
        console.log('Catched!');
    }
});
