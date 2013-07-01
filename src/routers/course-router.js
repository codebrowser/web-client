codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses': 'courses'

    },

    initialize: function () {

        this.courseView = new codebrowser.view.CourseView();
    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    courses: function (studentId) {

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

        codebrowser.controller.ViewController.push(this.courseView);
    }
});
