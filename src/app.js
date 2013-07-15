/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    controller: {},
    router: {},

    initialize: function () {
//
//        // Oops! Catch all global unhandled errors
//        window.onerror = function () {
//
//            var errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
//            codebrowser.controller.ViewController.push(errorView, true);
//        }
//
//        // Initialise routers
//        codebrowser.app.base = new codebrowser.router.BaseRouter();
//        codebrowser.app.student = new codebrowser.router.StudentRouter();
//        codebrowser.app.course = new codebrowser.router.CourseRouter();
//        codebrowser.app.exercise = new codebrowser.router.ExerciseRouter();
//        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();
//
//        // History
//        Backbone.history.start();
        var collection = new codebrowser.collection.SnapshotCollection(null, {studentId:167,courseId:1,exerciseId:210});
        collection.fetch({async:false});

        collection.getDifferences(function (differences) {
            console.log(differences);
        });
    }
}
