codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'courses/(:studentId):courseId(/)':                   'navigate',
        'courses/(:studentId):courseId/exercises(/)':         'exercises',
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

    navigate: function (studentId, courseId) {

        if (!studentId) {

            codebrowser.app.snapshot.navigate('#/courses/' +
                                              courseId +
                                              '/exercises', { replace: true });

            return;
        }

        codebrowser.app.snapshot.navigate('#/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    exercises: function (studentId, courseId) {

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
                                                                                       courseId: courseId });

        this.exerciseView.collection = exerciseCollection;

        var self = this;

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
