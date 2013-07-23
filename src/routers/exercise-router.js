codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'courses/:courseId(/)':                               'navigateToCourseExercises',
        'courses/:courseId/exercises(/)':                     'courseExercises',
        'students/:studentId/courses/:courseId(/)':           'navigate',
        'students/:studentId/courses/:courseId/exercises(/)': 'exercises'

    },

    /* Initialise */

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExercisesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigateToCourseExercises: function (courseId) {

        codebrowser.app.snapshot.navigate('#/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });

    },

    navigate: function (studentId, courseId) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    courseExercises: function (courseId) {

        this.exercises(null, courseId);
    },

    exercises: function (studentId, courseId) {

        var self = this;

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            student.fetch({

                cache: true,
                expires: config.cache.expires,

                success: function () {

                    self.exerciseView.student = student;
                },

                // Student fetch failed
                error: function () {

                    self.notFound();
                }

            });

        }

        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
                                                                                         courseId: courseId });
        exerciseCollection.course = course;

        // Fetch course
        course.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.exerciseView.course = course;
            },

            // Course fetch failed
            error: function () {

                self.notFound();
            }

        });

        this.exerciseView.collection = exerciseCollection;

        // Fetch exercise collection
        exerciseCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.exerciseView.render();
            },

            // Exercises fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.exerciseView);
    }
});
