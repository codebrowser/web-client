/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    models: {},
    collections: {},
    routers: {},

    initialize: function () {

        codebrowser.app.snapshot = new codebrowser.routers.SnapshotRouter();
        Backbone.history.start();
    }
}
