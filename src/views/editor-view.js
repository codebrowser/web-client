codebrowser.view.EditorView = Backbone.View.extend({

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    events: {

        'click #split': 'splitEvent'

    },

    initialize: function () {

        this.$el.empty();

        // Create divs for elements
        this.topContainer = $('<div>');
        this.editorElement = $('<div>', { id: 'editor' });

        this.previousEditorElement = $('<div>', { id: 'previous-editor' }).hide();
        this.currentEditorElement = $('<div>', { id: 'current-editor' });

        this.editorElement.append(this.previousEditorElement);
        this.editorElement.append(this.currentEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);

        // Hide container until needed
        this.$el.hide();

        // Create Ace editor
        this.previousEditor = ace.edit(this.previousEditorElement.get(0));
        this.currentEditor = ace.edit(this.currentEditorElement.get(0));

        // Configure editor
        config.editor.configure(this.previousEditor);
        config.editor.configure(this.currentEditor);
    },

    render: function () {

        // Template
        var topContainerOutput = $(this.template.topContainer(this.currentModel.toJSON()));

        // Attach to DOM
        this.topContainer.html(topContainerOutput);
    },

    setModel: function (previousModel, currentModel) {

        this.previousModel = previousModel;
        this.currentModel = currentModel;

        this.update();
    },

    update: function () {

        this.$el.show();

        var filename = this.currentModel.get('name');
        var mode = codebrowser.helper.AceMode.getModeForFilename(filename);

        var self = this;

        // Fetch previous file if the models are not the same
        if (this.previousModel !== this.currentModel) {

            this.previousModel.fetchContent(function (content) {

                self.setContent(self.previousEditor, content, mode);
            });
        }

        // Fetch current file
        this.currentModel.fetchContent(function (content) {

            self.setContent(self.currentEditor, content, mode);
        });

        this.render();
    },

    setContent: function (editor, content, mode) {

        // Set content for editor
        editor.setValue(content);
        editor.navigateFileStart();

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    toggleSplit: function (split) {

        this.split = split;

        if (!this.split) {

            this.previousEditorElement.hide();
            this.previousEditorElement.css('width', '0');
            this.currentEditorElement.css('width', '');

        } else {

            this.previousEditorElement.css('width', '469px');
            this.currentEditorElement.css('width', '468px');
            this.previousEditorElement.show();
        }
    },

    splitEvent: function () {

        this.toggleSplit($('#split').prop('checked'));
    }
});
