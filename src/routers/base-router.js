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

        var self = this;

        var studentGroups = new codebrowser.collection.StudentGroupCollection();

        studentGroups.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.rootView.showStudentGroups = studentGroups.size() > 0;
                codebrowser.controller.ViewController.push(self.rootView, true);
            },

            error: function () {

                self.notFound();
            }
        });
    },

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);

    }
});
