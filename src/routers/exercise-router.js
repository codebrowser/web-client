codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises': 'exercises'

    },

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExerciseView();
    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    exercises: function (studentId, courseId) {

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

        codebrowser.controller.ViewController.push(this.exerciseView);
    }
});
