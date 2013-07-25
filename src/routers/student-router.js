codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students(/)':                                         'students',
        'courses/:courseId/exercises/:exerciseId/students(/)': 'exerciseStudents'

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

    exerciseStudents: function (courseId, exerciseId) {

        this.students({ courseId: courseId, exerciseId: exerciseId });

    },

    students: function (options) {

        var studentCollection = new codebrowser.collection.StudentCollection(options);

        this.studentView.collection = studentCollection;

        var self = this;

        // Fetch student collection
        studentCollection.fetch({

            cache: true,
            expires: config.cache.expires,

            success: function () {

                self.studentView.render();
            },

            // Students fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.studentView);
    }
});
