codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId':         'navigate',
        'students/:studentId/courses': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.courseView = new codebrowser.view.CoursesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigate: function (studentId) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          studentId +
                                          '/courses', { replace: true });
    },

    courses: function (studentId) {

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        var self = this;

        // Fetch course collection
        courseCollection.fetch({

            cache: true,
            expires: 3600,

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
