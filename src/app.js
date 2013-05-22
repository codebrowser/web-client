/* exported codebrowser */

$(document).ready(function() {

    codebrowser.initialize();
});

var codebrowser = {

    models: {},
    collections: {},
    routers: {},

    initialize: function () {

        codebrowser.snapshot = new codebrowser.routers.SnapshotRouter();
        Backbone.history.start();
    }

}
