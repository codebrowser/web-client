codebrowser.views.EditorView = Backbone.View.extend({

    initialize: function () {

        // Create editor
        this.editor = ace.edit(this.el);

        // Configure editor
        config.editor.configure(this.editor);

        // Set syntax mode
        this.editor.getSession().setMode('ace/mode/java');
    },

    setContent: function (content) {

        this.editor.setValue(content);
    }
});
