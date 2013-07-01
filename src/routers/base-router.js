codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
    },

    /* Actions */

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    },

    root: function () {

        this.navigate('#/students');
    }
});
