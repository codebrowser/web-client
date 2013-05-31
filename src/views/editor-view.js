codebrowser.view.EditorView = Backbone.View.extend({

    render: function (data, mode) {

        var source   = $('#editor-template').html();
        var template = Handlebars.compile(source);
        template = template(this.model.toJSON());
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);

        // Set content for editor
        this.setContent(data, mode);
    },

    setModel: function (model) {

        this.model = model;
        this.update();
    },

    update: function () {

        var self = this;

        // Fetch file
        this.model.fetchContent(function(data) {

            var filename = self.model.get('name');
            var mode = codebrowser.helper.AceMode.getModeForFilename(filename);
            self.render(data, mode);
        });
    },

    setContent: function (content, mode) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();

        // Set syntax mode
        this.editor.getSession().setMode(mode);
    }
});
