codebrowser.router.StudentGroupRouter = Backbone.Router.extend({

    routes: {

        'studentgroups(/)': 'studentGroups',

    },

    /* Initialise */

    initialize: function () {

        this.studentGroupsView = new codebrowser.view.StudentGroupsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    studentGroups: function () {

        var self = this;

        var studentGroupCollection = new codebrowser.collection.StudentGroupCollection();

        this.studentGroupsView.collection = studentGroupCollection;

        studentGroupCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                codebrowser.controller.ViewController.push(self.studentGroupsView, true);
            },

            error: function () {

                self.notFound();
            }
        });
    }
});
