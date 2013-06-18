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

    markers: {'main-editor': [], 'side-editor': []},
    diffLines: [],

    diff: false,
    canDiff: true,

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

    setContent: function (editor, content, mode) {

        // Remember cursor position
        var position = editor.getSelection().getSelectionAnchor();

        // Remember scroll position
        var scrollPosition = editor.getSession().getScrollTop();

        // Clear markers
        this.clearMarkers(editor);

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

        var fileSynced = _.after(2, function() {

            self.canDiff = true;
            self.toggleDiff(self.diff);
        });

        this.model = file;
        this.previousModel = previousFile;

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Show view if necessary
        this.$el.show();

        // Disable split view if both models are the same
        if (previousFile === this.model) {

            this.toggleSplit(false);

            this.canDiff = false;
            this.toggleDiff(false);

        } else {

            // Restore split state
            this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');

            // Restore diff state
            this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.diff) === 'true');
        }

        // Fetch previous file only if the models are not the same
        if (previousFile !== this.model) {

            previousFile.fetchContent(function (content) {

                // TODO: Error handling
                self.setContent(self.sideEditor, content, mode);
                fileSynced();
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content) {

            // TODO: Error handling
            self.setContent(self.mainEditor, content, mode);
            fileSynced();
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

        if (this.diff) {
            this.toggleDiff(true);
        }
    },

    toggleDiff: function (diff) {

        var Range = ace.require('ace/range').Range;

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

            // Diff
            var from = difflib.stringAsLines(previousContent);
            var to = difflib.stringAsLines(content);

            var sequenceMatcher = new difflib.SequenceMatcher(from, to);

            /* jshint camelcase: false */

            var differences = sequenceMatcher.get_opcodes();

            /* jshint camelcase: true */

            // Show markers
            for (var i = 0; i < differences.length; i++) {

                var difference = differences[i];
                var type = difference[0];

                var fromRowStart = difference[1];
                var fromRowEnd = difference[2] - 1;

                var toRowStart = difference[3];
                var toRowEnd = difference[4] - 1;

                var marker;

                // Insert
                if (type === 'insert') {

                    marker = this.mainEditor.getSession()
                            .addMarker(new Range(toRowStart, 0, toRowEnd, 1), 'insert', 'fullLine');

                    this.markers['main-editor'].push(marker);
                }

                // Replace
                if (type === 'replace') {

                    marker = this.mainEditor.getSession()
                            .addMarker(new Range(toRowStart, 0, toRowEnd, 1), 'replace', 'fullLine');

                    this.markers['main-editor'].push(marker);
                }

                // Delete
                if (type === 'delete') {

                    if (!this.split) {

                        var deletedAsLines = from.slice(fromRowStart, fromRowEnd + 1);

                        // Remember lines
                        this.diffLines.push({rowStart: fromRowStart, rowEnd: fromRowEnd + 1});

                        var deleted = deletedAsLines.join('\n');

                        this.mainEditor.getSession().insert({row: fromRowStart, column: 0}, deleted + '\n');


                        marker = this.mainEditor.getSession()
                                .addMarker(new Range(fromRowStart, 0, fromRowEnd, 1), 'delete', 'fullLine');

                        this.markers['main-editor'].push(marker);
                    }

                    marker = this.sideEditor.getSession()
                            .addMarker(new Range(fromRowStart, 0, fromRowEnd, 1), 'delete', 'fullLine');

                    this.markers['side-editor'].push(marker);
                }
            }

            return;
        }


        /* Clear diffs */

        for (var j=0; j < this.diffLines.length; j++) {
            this.mainEditor.getSession().remove(new Range(this.diffLines[j].rowStart, 0, this.diffLines[j].rowEnd, 0));
        }

        this.diffLines = [];

        this.clearMarkers(this.mainEditor);
        this.clearMarkers(this.sideEditor);
    },

    clearMarkers: function (editor) {

        // Clear markers
        while (this.markers[editor.container.id].length > 0) {
            editor.getSession().removeMarker(this.markers[editor.container.id].pop());
        }
    }
});
