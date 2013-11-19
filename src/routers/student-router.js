codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students(/)':                                                    'students',
        'studentgroups/:studentGroupId(/)':                               'groupNavigation',
        'studentgroups/:studentGroupId/students(/)':                      'groupStudents',
        'courses/:courseId/exercises/:exerciseId(/)':                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students(/)':            'exerciseStudents',
        'courses/:courseId/students(/)':                                  'courseStudents'

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

    groupNavigation: function (studentGroupId) {

        codebrowser.app.student.navigate('#/studentgroups/' +
                                         studentGroupId +
                                         '/students', { replace: true });
    },

    exerciseStudents: function (courseId, exerciseId) {

        this.students({ courseId: courseId, exerciseId: exerciseId });

    },

    courseStudents: function (courseId) {

        this.students({ courseId: courseId });
    },

    groupStudents: function (studentGroupId) {

        this.students({ studentGroupId: studentGroupId });
    },

    students: function (options) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {
            self.studentView.render();
            codebrowser.controller.ViewController.push(self.studentView);
        });

        if (options && options.courseId) {

            var courseFetched = _.after(1, function () {

                if(options.exerciseId) {

                    var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

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

                } else {

                    fetchSynced();
                }
            });

            var course = codebrowser.model.Course.findOrCreate({ id: options.courseId });

            // Fetch course
            course.fetch({

                cache: true,
                expires: config.cache.expires,

                success: function() {

                    self.studentView.course = course;
                    self.studentView.exercise = null;
                    self.studentView.studentGroup = null;
                    courseFetched();
                    fetchSynced();
                },

                // Course fetch failed
                error: function() {

                    self.notFound();
                }

            });

        } else if (options && options.studentGroupId) {

            var studentGroup = codebrowser.model.StudentGroup.findOrCreate({ id: options.studentGroupId });

            studentGroup.fetch({

                cache: true,
                expires: config.cache.expires,

                success: function() {

                    self.studentView.studentGroup = studentGroup;
                    self.studentView.course = null;
                    self.studentView.exercise = null;
                    fetchSynced();
                    fetchSynced();
                },

                error: function() {

                    self.notFound();
                }

            });

        } else {

            self.studentView.studentGroup = null;
            self.studentView.course = null;
            self.studentView.exercise = null;
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
