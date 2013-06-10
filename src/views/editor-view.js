codebrowser.view.EditorView = Backbone.View.extend({

    template: Handlebars.templates.Editor,

    initialize: function () {

        this.$el.empty();

        // Create divs for elements
        this.topElement = $('<div>');
        this.editorElement = $('<div>', {id: 'editor'});

        this.$el.append(this.topElement);
        this.$el.append(this.editorElement);

        // Create editor
        this.editor = ace.edit(this.editorElement.get(0));

        // Configure editor
        config.editor.configure(this.editor);
    },

    render: function () {

        // Template
        var output = $(this.template(this.model.toJSON()));

        // Add to DOM
        this.topElement.html(output);
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

            // Set content for editor
            self.editor.setValue(content);
            self.editor.navigateFileStart();

            // Set syntax mode
            self.editor.getSession().setMode(mode);

            self.render();
        });
    }
});
