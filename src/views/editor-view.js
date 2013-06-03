codebrowser.view.EditorView = Backbone.View.extend({

    template: function () {

        return $('#editor-template').html();
    },

    render: function (content, mode) {

        // Template
        var template = Handlebars.compile(this.template());
        var output = template(this.model.toJSON());

        this.$el.html(output);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);

        // Set content for editor
        this.editor.setValue(content);
        this.editor.navigateFileStart();

        // Set syntax mode
        this.editor.getSession().setMode(mode);
    },

    setModel: function (model) {

        this.model = model;
        this.update();
    },

    update: function () {

        var self = this;

        // Fetch file
        this.model.fetchContent(function (content) {

            var filename = self.model.get('name');
            var mode = codebrowser.helper.AceMode.getModeForFilename(filename);

            self.render(content, mode);
        });
    }
});
