codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'courses(/)':                     'courses',
        'students/:studentId(/)':         'navigation',
        'students/:studentId/courses(/)': 'courses'

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

    navigation: function (studentId) {

        codebrowser.app.course.navigate('#/students/' +
                                        studentId +
                                        '/courses', { replace: true });
    },

    courses: function (studentId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(2, function () {
            self.courseView.render();
            codebrowser.controller.ViewController.push(self.courseView);
        });

        var student = codebrowser.model.Student.findOrCreate({ id: studentId });

        // Fetch student
        student.fetch({

            prefill: true,
            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.courseView.student = student;
                fetchSynced();
            },

            // Student fetch failed
            error: function () {

                self.notFound();
            }

        });

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        // Fetch course collection
        courseCollection.fetch({

            prefill: true,
            cache: true,
            expires: config.cache.expires,

            success: function () {

                fetchSynced();
            },

            // Courses fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
