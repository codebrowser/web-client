codebrowser.router.StudentRouter = codebrowser.router.BaseRouter.extend({

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

    navigation: function (courseId, exerciseId) {

        codebrowser.app.studentRouter.navigate('#/courses/' +
                                         courseId +
                                         '/exercises/' +
                                         exerciseId +
                                         '/students', { replace: true });

    },

    groupNavigation: function (studentGroupId) {

        codebrowser.app.studentRouter.navigate('#/studentgroups/' +
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

            codebrowser.controller.ViewController.push(self.studentView, true);
        });

        if (options && options.courseId) {

            var courseFetched = _.after(1, function () {

                if(options.exerciseId) {

                    var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

                    // Fetch exercise
                    self.fetchModel(exercise, true, function() {

                        self.studentView.exercise = exercise;
                        fetchSynced();
                    });

                } else {

                    fetchSynced();
                }
            });

            var course = codebrowser.model.Course.findOrCreate({ id: options.courseId });

            // Fetch course
            this.fetchModel(course, true, function() {

                self.studentView.course = course;
                self.studentView.exercise = null;
                self.studentView.studentGroup = null;
                courseFetched();
                fetchSynced();
            });

        } else if (options && options.studentGroupId) {

            var studentGroup = codebrowser.model.StudentGroup.findOrCreate({ id: options.studentGroupId });

            this.fetchModel(studentGroup, true, function() {

                self.studentView.studentGroup = studentGroup;
                self.studentView.course = null;
                self.studentView.exercise = null;
                fetchSynced();
                fetchSynced();
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
        this.fetchModel(studentCollection, true, fetchSynced);
    }
});
