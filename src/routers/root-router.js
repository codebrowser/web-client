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

        var self = this;

        var studentGroups = new codebrowser.collection.StudentGroupCollection();

        this.fetchModel(studentGroups, true, function () {

            self.rootView.showStudentGroups = studentGroups.size() > 0;
            codebrowser.controller.ViewController.push(self.rootView, true);
        });
    },

    pageNotFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    }
});
