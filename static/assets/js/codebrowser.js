this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<header>\n\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <span class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</span>\n\n</header>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <li><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth1.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = depth1.exerciseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n            ";
  return buffer;
  }

  buffer += "<div class='row'>\n\n    <div class='span5'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack2 = helpers.files) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.files; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.files) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>";
  if (stack2 = helpers.current) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.current; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " / ";
  if (stack2 = helpers.total) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.total; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";
  return buffer;
  });;

/* exported config */

/* Global configuration */

var config = {

    /* Storage keys */

    storage: {

        view: {

            EditorView: {

                split: 'codebrowser.view.EditorView.split',
                diff: 'codebrowser.view.EditorView.diff'

            }
        }
    },

    /* API */

    api: {

        main: {

            root: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/'

        }
    },

    /* View */

    view: {

        container: '#container'

    },

    /* Ace editor */

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);
            editor.getSession().setFoldStyle('markbeginend');

            // Text
            editor.setTheme('ace/theme/light');
            editor.setFontSize(12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
;

/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    controller: {},
    router: {},

    initialize: function () {

        // Oops! Catch all global unhandled errors
        window.onerror = function () {

            var errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
            codebrowser.controller.ViewController.pushToView(errorView, true);
        }

        // Initialise routers
        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

        // History
        Backbone.history.start();
    }
}
;

codebrowser.helper.AceMode = {

    mode: {

        'java': 'java'

    },

    getModeForFilename: function (filename) {

        // Fallback to text
        var mode = 'text';

        // Can determine filename extension
        if (filename.indexOf('.') !== -1 && filename.indexOf('.') !== 0) {

            var split = filename.split('.');
            var filenameExtension = split[split.length - 1];

            // Set mode or fallback to text if no mode is specified for the filename extension
            mode = this.mode[filenameExtension] || mode;
        }

        return 'ace/mode/' + mode;
    }
}
;

Handlebars.registerHelper('date', function (time) {

    return new Date(time).toLocaleString();
});
;

codebrowser.model.Course = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'courses',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.model.Exercise',
            collectionType: 'codebrowser.collection.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ]
});
;

codebrowser.model.Diff = function (previousContent, content) {

    var differences = [];

    var from = difflib.stringAsLines(previousContent);
    var to = difflib.stringAsLines(content);

    // Create diff
    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    // Diff operations
    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    // Offsets
    var offset = 0;
    var deleteOffset = 0;

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        var difference = {

            type:     operation[0],
            rowStart: operation[3],
            rowEnd:   operation[4] - 1,
            offset: offset

        }

        // Ignore equal
        if (difference.type === 'equal') {
            continue;
        }

        // Replace
        if (difference.type === 'replace') {

            var fromChange = operation[2] - operation[1] - 1;
            var toChange = operation[4] - operation[3] - 1;

            // Replace contains delete-lines
            if (fromChange > toChange) {

                differences.push(difference);
                difference = _.clone(difference);

                operation[1] += (operation[4] - operation[3]);

                difference.type = 'delete';
            }

            // Replace contains insert-lines
            if (toChange > fromChange) {

                var rowEnd = difference.rowEnd;
                difference.rowEnd = operation[2] - 1;

                differences.push(difference);
                difference = _.clone(difference);

                difference.type = 'insert';
                difference.rowStart += (operation[2] - operation[1]);
                difference.rowEnd = rowEnd;
            }
        }

        // Insert increases delete offset
        if (difference.type === 'insert') {
            deleteOffset += difference.rowEnd - difference.rowStart + 1;
        }

        // Delete
        if (difference.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]);
            var deleted = deletedAsLines.join('\n') + '\n';

            difference.rowStart = operation[1] + deleteOffset;
            difference.rowEnd = operation[2] - 1 + deleteOffset;

            difference = _.extend(difference, { fromRowStart: operation[1], fromRowEnd: operation[2] - 1, lines: deleted });

            // Delete increases offset
            offset += difference.rowEnd - difference.rowStart + 1;

            // Delete increases delete offset
            deleteOffset += difference.rowEnd - difference.rowStart + 1;
        }

        differences.push(difference);
    }

    this.getDifferences = function () {

        return differences;
    }
}
;

/*
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('course').url() + '/exercises';
    }
});
;

/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    /* Callback parameters (content, [error]) are the received data and possible error, respectively. */

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (content) {

            callback(content, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
;

/*
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.api.main.root +
               'students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        },

        {
            type: Backbone.HasOne,
            key: 'course',
            relatedModel: 'codebrowser.model.Course'
        },

        {
            type: Backbone.HasOne,
            key: 'exercise',
            relatedModel: 'codebrowser.model.Exercise'
        }
    ],

    initialize: function () {

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.set('studentId', this.collection.studentId);
            this.set('courseId', this.collection.courseId);
            this.set('exerciseId', this.collection.exerciseId);
        }
    }
});
;

codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.model.Course',
            collectionType: 'codebrowser.collection.CourseCollection'
        }
    ]
});
;

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,
    url: config.api.main.root + 'courses'

});
;

/*
 * ExerciseCollection is resolved through a course.
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        return this.course.url() + '/exercises';
    }
});
;

/*
 * FileCollection is resolved through a snapshot.
 */

codebrowser.collection.FileCollection = Backbone.Collection.extend({

    model: codebrowser.model.File,

    url: function () {

        return config.api.main.root +
               'students/' +
               this.snapshot.get('studentId') +
               '/courses/' +
               this.snapshot.get('courseId') +
               '/exercises/' +
               this.snapshot.get('exerciseId') +
               '/snapshots/' +
               this.snapshot.id +
               '/files';
    }
});
;

/* 
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
;

codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,
    url: config.api.main.root + 'students'

});
;

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

    decorations: {

        'main-editor': [],
        'side-editor': []

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

    removeDecorations: function (editor) {

        // Remove decorations from editor
        while (this.decorations[editor.container.id].length > 0) {

            var decoration = this.decorations[editor.container.id].pop();

            editor.getSession().removeGutterDecoration(decoration.row, decoration.style);
        }
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

        // Remove decorations
        this.removeDecorations(editor);

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

            // Restore diff state if necessary
            if (!this.diff) {
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

    decorate: function (editor, rowStart, rowEnd, style) {

        for (var row = rowStart; row <= rowEnd; row++) {

            this.decorations[editor.container.id].push({ row: row, style: 'decoration ' + style });

            editor.getSession().addGutterDecoration(row, 'decoration ' + style);
        }
    },

    clearDiff: function () {

        var Range = ace.require('ace/range').Range;

        // Remove decorations
        this.removeDecorations(this.mainEditor);
        this.removeDecorations(this.sideEditor);

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
                                       .insert({ row: difference.rowStart + difference.offset, column: 0 },
                                               difference.lines);

                        // Decorate
                        this.decorate(this.mainEditor, difference.rowStart + difference.offset, difference.rowEnd + difference.offset, 'gutter-delete');

                        // Remember removed lines
                        this.removedLines.push({

                            rowStart: difference.rowStart + difference.offset,
                            rowEnd: difference.rowEnd + 1 + difference.offset

                        });

                    // Show only removed lines in side editor if split view is enabled
                    } else {

                        // Add marker for removed line in side editor
                        marker = this.sideEditor.getSession()
                                                .addMarker(new Range(difference.fromRowStart, 0, difference.fromRowEnd, 1),
                                                           difference.type,
                                                           'fullLine');

                        // Decorate
                        this.decorate(this.sideEditor, difference.fromRowStart, difference.fromRowEnd, 'gutter-delete');

                        // Remember marker
                        this.markers['side-editor'].push(marker);

                        continue;
                    }
                }

                var offset = 0;

                // Use offset only in single view
                if (!this.split) {
                    offset = difference.offset;
                }

                // Add marker to main editor
                marker = this.mainEditor
                             .getSession()
                             .addMarker(new Range(difference.rowStart + offset, 0, difference.rowEnd + offset, 1),
                                        difference.type,
                                        'fullLine');

                // Decorate
                this.decorate(this.mainEditor, difference.rowStart + offset, difference.rowEnd + offset, 'gutter-' + difference.type);

                // Remember marker
                this.markers['main-editor'].push(marker);
            }

            return;
        }

        // Disable diff
        this.clearDiff();
    }
});
;

codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Error,

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
;

codebrowser.view.NotFoundErrorView = codebrowser.view.ErrorView.extend({

    model: {

        message: 'Not Found.'

    }
});
;

codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,

    template: {

        navigationContainer: Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #split':    'split',
        'click #diff':     'diff',
        'click #first':    'first',
        'click #previous': 'previous',
        'click #next':     'next',
        'click #last':     'last'

    },

    initialize: function () {

        var self = this;

        // Snapshot container
        this.snapshotContainer = $('<div>', { id: 'snapshot-container' });

        // Create divs for elements
        this.navigationContainer = $('<div>', { id: 'navigation-container' });
        this.editorContainer = $('<div>', { id: 'editor-container' });

        // Append elements to parent
        this.snapshotContainer.append(this.navigationContainer);
        this.snapshotContainer.append(this.editorContainer);

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: this.editorContainer });

        // Bind keydown
        $(document).keydown(function () {

            // Left
            if (event.keyCode === 37) {
                self.previous();
            }

            // Right
            if (event.keyCode === 39) {
                self.next();
            }
        });
    },

    remove: function () {

        // Unbind keydown
        $(document).unbind();

        // Remove editor
        this.editorView.remove();

        // Empty container
        this.$el.empty();
        this.$el.undelegate();
    },

    render: function () {

        // Append wrapper to DOM
        this.$el.append(this.snapshotContainer);

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            current: index + 1,
            total: this.collection.length

        }

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(_.extend(this.model.toJSON(), attributes)));

        // Split view is enabled, set split button as active
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        }

        // Disable split button if editor can not be split
        if (!this.editorView.canSplit()) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // Diff is enabled, set diff button as active
        if (this.editorView.diff) {
            $('#diff', navigationContainerOutput).addClass('active');
        }

        // Disable diff button if editor can not diff
        if (!this.editorView.canDiff()) {
            $('#diff', navigationContainerOutput).attr('disabled', true);
        }

        // First snapshot, disable the buttons for first and previous
        if (index === 0) {
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable the buttons for next and last
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Previous snapshot
        var index = this.collection.indexOf(snapshot);
        var previousSnapshot = this.collection.at(index - 1);

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;
        }

        // Determine current file
        this.file = this.model.get('files').get(fileId);
        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        this.render();
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
    },

    navigate: function (snapshot, file) {

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        codebrowser.app.snapshot.navigate('#/students/' +
                                          this.collection.studentId +
                                          '/courses/' +
                                          this.collection.courseId +
                                          '/exercises/' +
                                          this.collection.exerciseId +
                                          '/snapshots/' +
                                          snapshot.id +
                                          '/files/' +
                                          file.id);
    },

    first: function () {

        var first = this.collection.first();
        var file = first.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(first, file);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        if (!previous) {
            return;
        }

        var file = previous.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(previous, file);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        if (!next) {
            return;
        }

        var file = next.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(next, file);
    },

    last: function () {

        var last = this.collection.last();
        var file = last.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(last, file);
    }
});
;

codebrowser.controller.ViewController = {

    view: null,

    isActive: function (view) {

        return this.view === view;
    },

    pushToView: function (view, render) {

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }
    }
}
;

codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'notFound'

    },

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
    },

    notFound: function () {

        codebrowser.controller.ViewController.pushToView(this.errorView, true);
    }
});
;

codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId': 'snapshot'

    },

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        // Create snapshot view if it is not active
        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();

            codebrowser.controller.ViewController.pushToView(this.snapshotView);
        }
    },

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.pushToView(errorView, true);
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId) {

        this.setUp();

        var snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                // Snapshot
                var snapshot = snapshotCollection.get(snapshotId);

                // Invalid snapshot ID
                if (!snapshot) {

                    self.notFound();

                    return;
                }

                // No file ID specified, navigate to first file
                if (!fileId) {

                    self.snapshotView.navigate(snapshot, null);

                    return;
                }

                // Invalid file ID
                if (!snapshot.get('files').get(fileId)) {

                    self.notFound();

                    return;
                }

                self.snapshotView.update(snapshot, fileId);
            },

            // Snapshots fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
