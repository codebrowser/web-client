codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students': 'students'

    },

    /* Initialise */

    initialize: function () {

        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    students: function () {

        var studentCollection = new codebrowser.collection.StudentCollection();

        this.studentView.collection = studentCollection;

        var self = this;

        // Fetch student collection
        studentCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.studentView.render();
            },

            // Students fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.studentView);
    }
});
