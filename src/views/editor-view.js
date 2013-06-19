codebrowser.view.EditorView = Backbone.View.extend({

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    /* Split */

    split: false,

    canSplit: function () {

        return this.model !== this.previousModel;
    },

    /* Diff */

    diff: false,

    canDiff: function () {

        return this.model !== this.previousModel;
    },

    markers: {

        'main-editor': [],
        'side-editor': []

    },

    removedLines: [],

    /* Editor */

    initialize: function () {

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

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        // Template
        var topContainerOutput = $(this.template.topContainer(this.model.toJSON()));

        // Update top container
        this.topContainer.html(topContainerOutput);
    },

    removeMarkers: function (editor) {

        // Remove markers from editor
        while (this.markers[editor.container.id].length > 0) {
            editor.getSession().removeMarker(this.markers[editor.container.id].pop());
        }
    },

    setContent: function (editor, content, mode) {

        // Remember cursor position
        var position = editor.getSelection().getSelectionAnchor();

        // Remember scroll position
        var scrollPosition = editor.getSession().getScrollTop();

        // Remove markers
        this.removeMarkers(editor);

        // Set content for editor
        editor.setValue(content);

        // Set cursor and scroll position
        editor.moveCursorToPosition(position);
        editor.getSelection().clearSelection();
        editor.getSession().setScrollTop(scrollPosition);

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    update: function (previousFile, file) {

        var self = this;

        this.model = file;
        this.previousModel = previousFile;

        // Wait for files to be in sync
        var fileSynced = _.after(2, function() {

            self.toggleDiff(self.diff);
        });

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Disable split and diff view if both models are the same
        if (previousFile === this.model) {

            this.toggleSplit(false);
            this.toggleDiff(false);

        } else {

            // Restore split state
            this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');

            // Restore diff state if editor doesn't contain any diff markers
            if (this.markers['main-editor'].length === 0) {
                this.toggleDiff(localStorage.getItem(config.storage.view.EditorView.diff) === 'true');
            }
        }

        // Fetch previous file only if the models are not the same
        if (previousFile !== this.model) {

            previousFile.fetchContent(function (content, error) {

                if (error) {
                    throw new Error('Failed file fetch.');
                }

                self.setContent(self.sideEditor, content, mode);

                fileSynced();
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content, error) {

            if (error) {
                throw new Error('Failed file fetch.');
            }

            self.setContent(self.mainEditor, content, mode);

            fileSynced();
        });

        // Show view if necessary
        this.$el.show();

        this.render();
    },

    didSplit: function () {

        // Re-render diff
        this.clearDiff();
        this.toggleDiff(this.diff);
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

            this.didSplit();

            return;
        }

        // Disable split
        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });

        this.didSplit();
    },

    clearDiff: function () {

        var Range = ace.require('ace/range').Range;

        // Remove added lines
        while (this.removedLines.length > 0) {
            var difference = this.removedLines.pop();
            this.mainEditor.getSession().remove(new Range(difference.rowStart, 0, difference.rowEnd, 0));
        }

        // Remove markers
        this.removeMarkers(this.mainEditor);
        this.removeMarkers(this.sideEditor);
    },

    toggleDiff: function (diff) {

        var Range = ace.require('ace/range').Range;

        // Use parameter if given, otherwise toggle internal diff state
        if (diff !== undefined) {

            this.diff = diff;

        } else {

            this.diff = !this.diff;

            // Store diff state
            localStorage.setItem(config.storage.view.EditorView.diff, this.diff);
        }

        // Enable diff
        if (this.diff) {

            var previousContent = this.sideEditor.getValue();
            var content = this.mainEditor.getValue();

            var differences = new codebrowser.model.Diff(previousContent, content).getDifferences();

            // Offset by added lines
            var offset = 0;

            // Show differences
            for (var i = 0; i < differences.length; i++) {

                var difference = differences[i];

                var marker;

                // Delete
                if (difference.type === 'delete') {

                    // Show removed lines within main editor if not in split view
                    if (!this.split) {

                        // Add removed lines to main editor
                        this.mainEditor.getSession()
                                       .insert({ row: difference.rowStart + offset, column: 0 },
                                               difference.lines);

                        // Remember removed lines
                        this.removedLines.push({

                            rowStart: difference.rowStart + offset,
                            rowEnd: difference.rowEnd + 1 + offset

                        });

                    // Show only removed lines in side editor if split view is enabled
                    } else {

                        // Add marker for removed line in side editor
                        marker = this.sideEditor.getSession()
                                                .addMarker(new Range(difference.rowStart, 0, difference.rowEnd, 1),
                                                           difference.type,
                                                           'fullLine');

                        // Remember marker
                        this.markers['side-editor'].push(marker);

                        continue;
                    }
                }


                // Add markers to main editor
                marker = this.mainEditor
                             .getSession()
                             .addMarker(new Range(difference.rowStart + offset, 0, difference.rowEnd + offset, 1),
                                        difference.type,
                                        'fullLine');

                // Remember marker
                this.markers['main-editor'].push(marker);

                // Remove increases offset
                if (difference.type === 'delete') {
                    offset += difference.rowEnd - difference.rowStart;
                }
            }

            return;
        }

        // Disable diff
        this.clearDiff();
    },
});
