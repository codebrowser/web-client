codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.rootView = new codebrowser.view.RootView();
        this.errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops!' } });

    },

    /* Actions */

    root: function () {

        this.rootView.render();
        codebrowser.controller.ViewController.push(this.rootView);

    },

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);

    }
});
