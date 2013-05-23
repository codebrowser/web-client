codebrowser.views.SnapshotView = Backbone.View.extend({

    initialize: function () {

        this.editor = ace.edit(this.el);
        editor.config.init(this.editor);
    },

    render: function () {

        this.editor.setValue(this.model);
    },

    setContent: function (data) {
        this.model = data;
        this.render();
    }
});
