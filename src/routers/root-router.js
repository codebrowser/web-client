codebrowser.router.RootRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        '':          'root',
        '*notFound': 'pageNotFound'

    },

    /* Initialise */

    initialize: function () {

        this.rootView = new codebrowser.view.RootView();
        this.errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops!' } });
    },

    /* Actions */

    root: function () {

        this.rootView.showStudentGroups = localStorage.getItem('config.studentgroups');
        this.rootView.showTags = localStorage.getItem('config.tagnames');
        this.rootView.showTagCategories = localStorage.getItem('config.tagcategories');
        this.rootView.showComments = localStorage.getItem('config.comments');

        codebrowser.controller.ViewController.push(this.rootView, true);
    },

    pageNotFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    }
});
