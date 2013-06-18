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
    router: {},

    initialize: function () {

        // Oops! Something went wrong
        window.onerror = function () {

            new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
        }

        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
    }
}
