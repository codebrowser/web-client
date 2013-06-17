codebrowser.view.EditorView = Backbone.View.extend({

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    split: false,
    markers: [],

    canSplit: function () {

        return this.model !== this.previousModel;
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
        this.sideEditorElement = $('<div>', { id: 'side-editor', height: '800px' }).hide();
        this.mainEditorElement = $('<div>', { id: 'main-editor', height: '800px' });

        this.editorElement.append(this.sideEditorElement);
        this.editorElement.append(this.mainEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);

        // Create Ace editor
        this.sideEditor = ace.edit(this.sideEditorElement.get(0));
        this.mainEditor = ace.edit(this.mainEditorElement.get(0));

        // Configure editor
        config.editor.configure(this.sideEditor);
        config.editor.configure(this.mainEditor);
    },

    render: function () {

        // Template
        var topContainerOutput = $(this.template.topContainer(this.model.toJSON()));

        // Update top container
        this.topContainer.html(topContainerOutput);
    },

    diff: function (previousContent, content) {

        var Range = ace.require('ace/range').Range;

        var base = difflib.stringAsLines(previousContent);
        var changed = difflib.stringAsLines(content);

        var sequenceMatcher = new difflib.SequenceMatcher(base, changed);

        /* jshint camelcase: false */

        var differences = sequenceMatcher.get_opcodes();

        /* jshint camelcase: true */

        for (var i = 0; i < differences.length; i++) {

            var block = differences[i];
            var type = block[0];

            var changedRowStart = block[3];
            var changedRowEnd = block[4] - 1;

            // Insert
            if (type === 'insert') {

                this.markers.push(this.mainEditor.getSession().addMarker(new Range(changedRowStart, 0, changedRowEnd, 1), 'insert', 'fullLine'));
            }

            // Replace
            if (type === 'replace') {

                this.markers.push(this.mainEditor.getSession().addMarker(new Range(changedRowStart, 0, changedRowEnd, 1), 'replace', 'fullLine'));
            }
        }

    },

    setContent: function (editor, content, mode) {

        // Remember cursor position
        var position = editor.getSelection().getSelectionAnchor();

        // Remember scroll position
        var scrollPosition = editor.getSession().getScrollTop();

        // Clear markers
        while (this.markers.length > 0) {

            var markerId = this.markers.pop();
            this.mainEditor.getSession().removeMarker(markerId);
        }

        // Set content for editor
        editor.setValue(content);

        // Set cursor and scroll position
        editor.moveCursorToPosition(position);
        editor.getSelection().clearSelection();
        editor.getSession().setScrollTop(scrollPosition);

        // Set syntax mode
        editor.getSession().setMode(mode);

        this.diff(this.sideEditor.getValue(), this.mainEditor.getValue());
    },

    update: function (previousFile, file) {

        var self = this;

        this.model = file;
        this.previousModel = previousFile;

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Show view if necessary
        this.$el.show();

        // Disable split view if both models are the same
        if (previousFile === this.model) {

            this.toggleSplit(false);

        } else {

            // Restore split state
            this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');
        }

        // Fetch previous file only if the models are not the same
        if (previousFile !== this.model) {

            previousFile.fetchContent(function (content) {

                // TODO: Error handling
                self.setContent(self.sideEditor, content, mode);
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content) {

            // TODO: Error handling
            self.setContent(self.mainEditor, content, mode);
        });

        this.render();
    },

    toggleSplit: function (split) {

        // Use parameter if given, otherwise toggle internal split state
        if (split !== undefined) {
            this.split = split;
        } else {

            this.split = !this.split;

            // Store split state
            localStorage.setItem(config.storage.view.EditorView.split, this.split);
        }

        // Enable split
        if (this.split) {

            // Split side editor to left
            this.sideEditorElement.css({ float: 'left', width: '50%' });
            this.sideEditorElement.show();

            // Split main editor to right
            this.mainEditorElement.css({ float: 'right', width: '50%' });

            return;
        }

        // Disable split
        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });
    }
});
