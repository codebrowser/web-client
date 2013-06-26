codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses': 'courses'

    },

    setUp: function () {

        // Create course view if it is not active
        if (!codebrowser.controller.ViewController.isActive(this.courseView)) {

            this.courseView = new codebrowser.view.CourseView();

            codebrowser.controller.ViewController.pushToView(this.courseView);
        }

    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    courses: function (studentId) {

        this.setUp();

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        var self = this;

        // Fetch course collection
        courseCollection.fetch({

            success: function () {

                self.courseView.render();
            },

            // Courses fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
