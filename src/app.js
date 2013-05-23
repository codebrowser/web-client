/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    editor.initialize();
    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    models: {},
    collections: {},
    views: {},
    routers: {},

    initialize: function () {

        codebrowser.app.snapshot = new codebrowser.routers.SnapshotRouter();
        Backbone.history.start();
    }
}

var editor = {

    initialize: function() {
        var editor = ace.edit('container');
        editor.setTheme('ace/theme/twilight');
        editor.getSession().setMode('ace/mode/java');
        editor.getSession().setTabSize(4);
    }

}
