codebrowser.router.CourseRouter = codebrowser.router.BaseRouter.extend({

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

    navigation: function (studentId) {

        codebrowser.app.courseRouter.navigate('#/students/' +
                                                studentId +
                                                '/courses', { replace: true });
    },

    courses: function (studentId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(studentId ? 2 : 1, function () {

            codebrowser.controller.ViewController.push(self.courseView, true);
        });

        if (studentId) {
            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.courseView.student = student;
                fetchSynced();
            });
        }

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        // Fetch course collection
        this.fetchModel(courseCollection, true, fetchSynced);
    }
});
