codebrowser.router.ExerciseRouter = codebrowser.router.BaseRouter.extend({

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

    navigation: function (studentId, courseId) {

        codebrowser.app.exerciseRouter.navigate('#/students/' +
                                                studentId +
                                                '/courses/' +
                                                courseId +
                                                '/exercises', { replace: true });
    },

    courseExercises: function (courseId) {

        this.exercises(null, courseId, null);
    },

    navigateToStudentExercises: function (courseId, studentId) {

        codebrowser.app.exerciseRouter.navigate('#/courses/' +
                                                courseId +
                                                '/students/' +
                                                studentId +
                                                '/exercises', { replace: true });
    },

    studentExercises: function (courseId, studentId) {

        this.exercises(studentId, courseId, 'studentExercises');
    },

    exercises: function (studentId, courseId, viewPath) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            codebrowser.controller.ViewController.push(self.exerciseView, true);
        });

        if (viewPath) {
            self.exerciseView.viewPath = viewPath;
        }

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.exerciseView.student = student;
                fetchSynced();
            });
        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
                                                                                       courseId: courseId });

        // Fetch course
        this.fetchModel(course, true, function () {

            self.exerciseView.course = course;
            fetchSynced();
        });

        this.exerciseView.collection = exerciseCollection;

        // Fetch exercise collection
        this.fetchModel(exerciseCollection, true, fetchSynced);
    }
});
