codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students': 'courses'

    },

    setUp: function () {

        // Create student view if it is not active
        if (!codebrowser.controller.ViewController.isActive(this.studentView)) {

            this.studentView = new codebrowser.view.StudentView();

            codebrowser.controller.ViewController.pushToView(this.studentView);
        }

    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    courses: function () {

        this.setUp();

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
    }
});
