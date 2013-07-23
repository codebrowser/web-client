codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'courses(/)':                     'courses',
        'students/:studentId(/)':         'navigate',
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

    navigate: function (studentId) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          studentId +
                                          '/courses', { replace: true });
    },

    courses: function (studentId) {

        var self = this;

        var student = codebrowser.model.Student.findOrCreate({ id: studentId });

        // Fetch student
        student.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.courseView.student = student;
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

            cache: true,
            expires: config.cache.expires,

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
