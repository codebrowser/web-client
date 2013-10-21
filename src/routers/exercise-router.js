codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'courses/:courseId/exercises(/)':                     'courseExercises',
        'courses/:courseId/students/:studentId(/)':           'navigateToStudentExercises',
        'courses/:courseId/students/:studentId/exercises(/)': 'studentExercises',
        'students/:studentId/courses/:courseId(/)':           'navigation',
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
    /**
    navigateToCourseExercises: function (courseId) {

        codebrowser.app.exercise.navigate('#/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });

    },
    **/
    navigation: function (studentId, courseId) {

        codebrowser.app.exercise.navigate('#/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    courseExercises: function (courseId) {

        this.exercises(null, courseId, null);
    },

    navigateToStudentExercises: function (courseId, studentId) {

        codebrowser.app.exercise.navigate('#/courses/' +
                                          courseId +
                                          '/students/' +
                                          studentId +
                                          '/exercises', { replace: true });
    },

    studentExercises: function (courseId, studentId) {

        //this.exercises({ studentId: studentId, courseId: courseId, viewPath: 'studentExercises' });
        this.exercises(studentId, courseId, 'studentExercises');

    },

    exercises: function (studentId, courseId, viewPath) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {
            self.exerciseView.render();
            codebrowser.controller.ViewController.push(self.exerciseView);
        });

        if (viewPath) {
            self.exerciseView.viewPath = viewPath;
        }

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            student.fetch({

                cache: true,
                expires: config.cache.expires,

                success: function () {

                    self.exerciseView.student = student;
                    fetchSynced();
                },

                // Student fetch failed
                error: function () {

                    self.notFound();
                }

            });

        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
                                                                                       courseId: courseId });

        // Fetch course
        course.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.exerciseView.course = course;
                fetchSynced();
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

                fetchSynced();
            },

            // Exercises fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
