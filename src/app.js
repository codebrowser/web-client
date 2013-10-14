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

        // Oops! Catch all global unhandled errors
        window.onerror = function (error) {

            var errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops! ' + error } });
            codebrowser.controller.ViewController.push(errorView, true);
        }

        // Initialise index
        var indexView = new codebrowser.view.IndexView().render();

        // Initialise routers
        codebrowser.app.index = new codebrowser.router.IndexRouter({layout: indexView});
        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.student = new codebrowser.router.StudentRouter();
        codebrowser.app.course = new codebrowser.router.CourseRouter();
        codebrowser.app.exercise = new codebrowser.router.ExerciseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();
        codebrowser.app.tag = new codebrowser.router.TagRouter();
        codebrowser.app.select = new codebrowser.router.SelectRouter();

        // History
        Backbone.history.start();
    }
}
