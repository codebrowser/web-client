codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises': 'exercises'

    },

    setUp: function () {

        // Create exercise view if it is not active
        if (!codebrowser.controller.ViewController.isActive(this.exerciseView)) {

            this.exerciseView = new codebrowser.view.ExerciseView();

            codebrowser.controller.ViewController.push(this.exerciseView);
        }

    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    exercises: function (studentId, courseId) {

        this.setUp();

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId, courseId: courseId });

        this.exerciseView.collection = exerciseCollection;

        var self = this;

        // Fetch exercise collection
        exerciseCollection.fetch({

            success: function () {

                self.exerciseView.render();
            },

            // Exercises fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
