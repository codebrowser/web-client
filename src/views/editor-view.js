codebrowser.views.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var template = $('#editor-template').html();
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);

        // Set syntax mode
        this.editor.getSession().setMode('ace/mode/java');
    },

    setContent: function (content) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();
    }
});
