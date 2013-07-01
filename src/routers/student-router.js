codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students': 'courses'

    },

    initialize: function () {

        this.studentView = new codebrowser.view.StudentView();
    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    courses: function () {

        var studentCollection = new codebrowser.collection.StudentCollection();

        this.studentView.collection = studentCollection;

        var self = this;

        // Fetch student collection
        studentCollection.fetch({

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
