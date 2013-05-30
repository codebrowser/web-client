codebrowser.view.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var self = this;

        // Fetch file
        this.model.fetchContent(function(data) {

            var filename = self.model.get('name');
            var mode = codebrowser.helper.AceMode.getModeForFilename(filename);
            self.setContent(data, mode);
        });

        var template = Mustache.render($('#editor-template').html(), this.model.toJSON());
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);
    },

    setContent: function (content, mode) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();

        // Set syntax mode
        this.editor.getSession().setMode(mode);
    }
});
