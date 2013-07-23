codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.baseView = new codebrowser.view.BaseView();
        this.errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops!' } });
    },

    /* Actions */

    root: function () {

        this.baseView.render();
        codebrowser.controller.ViewController.push(this.baseView);
    },

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    }
});
