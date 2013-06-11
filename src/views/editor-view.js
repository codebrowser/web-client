codebrowser.view.EditorView = Backbone.View.extend({

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    events: {

        'click #split': 'splitEvent'

    },

    initialize: function () {

        // Empty container
        this.$el.empty();

        // Hide view until needed
        this.$el.hide();

        // Create divs for elements
        this.topContainer = $('<div>');
        this.editorElement = $('<div>', { id: 'editor' });

        // Elements for editors
        this.sideEditorElement = $('<div>', { id: 'previous-editor' }).hide();
        this.mainEditorElement = $('<div>', { id: 'current-editor' });

        this.editorElement.append(this.sideEditorElement);
        this.editorElement.append(this.mainEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);

        // Create Ace editor
        this.previousEditor = ace.edit(this.sideEditorElement.get(0));
        this.currentEditor = ace.edit(this.mainEditorElement.get(0));

        // Configure editor
        config.editor.configure(this.previousEditor);
        config.editor.configure(this.currentEditor);
    },

    render: function () {

        // Template
        var topContainerOutput = $(this.template.topContainer(this.model.toJSON()));

        // Update top container
        this.topContainer.html(topContainerOutput);
    },

    setContent: function (editor, content, mode) {

        // Set content for editor
        editor.setValue(content);
        editor.navigateFileStart();

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    update: function (previousFile, file) {

        // Show view if necessary
        this.$el.show();

        this.model = file;

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        var self = this;

        // Fetch previous file only if the models are not the same
        if (previousFile !== this.model) {

            previousFile.fetchContent(function (content) {

                // TODO: Error handling
                self.setContent(self.previousEditor, content, mode);
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content) {

            // TODO: Error handling
            self.setContent(self.currentEditor, content, mode);
        });

        this.render();
    },

    toggleSplit: function (split) {

        this.split = split;

        if (!this.split) {

            this.sideEditorElement.hide();
            this.sideEditorElement.css('width', '0');
            this.mainEditorElement.css('width', '');

        } else {

            this.sideEditorElement.css('width', '469px');
            this.mainEditorElement.css('width', '468px');
            this.sideEditorElement.show();
        }
    },

    splitEvent: function () {

        this.toggleSplit($('#split').prop('checked'));
    }
});
