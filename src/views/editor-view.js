codebrowser.view.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var self = this;

        // Fetch file
        this.model.fetchContent(function(data) {

            var fileName = self.model.get('name');
            var syntaxMode = codebrowser.helper.AceModeMapper.getMode(fileName);
            self.setContent(data, syntaxMode);
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
