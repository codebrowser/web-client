codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students(/)':                                                    'students',
        'courses/:courseId/exercises/:exerciseId(/)':                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students(/)':            'exerciseStudents'

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

    navigation: function (courseId, exerciseId) {

        codebrowser.app.student.navigate('#/courses/' +
                                         courseId +
                                         '/exercises/' +
                                         exerciseId +
                                         '/students', { replace: true });

    },

    exerciseStudents: function (courseId, exerciseId) {

        this.students({ courseId: courseId, exerciseId: exerciseId });

    },

    students: function (options) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {
            self.studentView.render();
            codebrowser.controller.ViewController.push(self.studentView);
        });

        if (options) {

            var courseFetched = _.after(1, function () {

                var exercise = codebrowser.model.Exercise.findOrCreate({id: options.exerciseId});

                // Fetch exercise
                exercise.fetch({

                    cache: true,
                    expires: config.cache.expires,

                    success: function() {

                        self.studentView.exercise = exercise;
                        fetchSynced();
                    },
                    // Exercise fetch failed
                    error: function() {

                        self.notFound();
                    }

                });
            });

            var course = codebrowser.model.Course.findOrCreate({ id: options.courseId });

            // Fetch course
            course.fetch({

                cache: true,
                expires: config.cache.expires,

                success: function() {

                    self.studentView.course = course;
                    courseFetched();
                    fetchSynced();
                },

                // Course fetch failed
                error: function() {

                    self.notFound();
                }

            });

        } else {

            fetchSynced();
            fetchSynced();
        }

        var studentCollection = new codebrowser.collection.StudentCollection(null, options);

        this.studentView.collection = studentCollection;

        // Fetch student collection
        studentCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                fetchSynced();
            },

            // Students fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
