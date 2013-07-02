this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <li><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "<h2>Courses</h2>\n\n<section>\n\n    <ul>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.courses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.courses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<header>\n\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n    <span class='pull-right'>\n\n        + ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || depth0.duration),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "\n\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n           data-original-title='\n\n                <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + " –</time>\n                <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\n\n           '\n\n           data-content='\n\n            <dl class=\"dl-horizontal pull-left\">\n\n              <dt>Insert</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\n\n              <dt>Replace</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\n\n              <dt>Delete</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\n\n            </dl>\n\n        '><i class='icon-info-sign icon-gray'></i></a>\n\n    </span>\n\n</header>\n";
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

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <li><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth1.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "<h2>Exercises</h2>\n\n<section>\n\n    <ul>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.exercises) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.exercises; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    <li><a href='#/students/"
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
    + "</a></li>\n                ";
  return buffer;
  }

  buffer += "<div class='row'>\n\n    <div class='span6'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n                ";
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
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='#/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n        ";
  return buffer;
  }

  buffer += "<h2>Students</h2>\n\n<section>\n\n    <ul>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.students) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.students; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n</section>\n";
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
            codebrowser.controller.ViewController.push(errorView, true);
        }

        // Initialise routers
        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.student = new codebrowser.router.StudentRouter();
        codebrowser.app.course = new codebrowser.router.CourseRouter();
        codebrowser.app.exercise = new codebrowser.router.ExerciseRouter();
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

Handlebars.registerHelper('date', function (date) {

    return moment(new Date(date)).format('D.M.YYYY HH.mm.ss');
});
;

codebrowser.helper.Duration = {

    calculate: function (time, previousTime) {

        var difference = time - previousTime;

        var value;
        var timeUnit;

        var seconds = Math.round(difference/1000);

        if (seconds > 60) {

            var minutes = Math.round(seconds / 60);

            if (minutes > 60) {

                var hours = Math.round(minutes / 60);

                if (hours > 24) {

                    var days = Math.round(hours / 24);

                    value = days;
                    timeUnit = 'day';

                } else {

                    value = hours;
                    timeUnit = 'hour';
                }

            } else {

                value = minutes;
                timeUnit = 'minute';
            }

        } else {

            value = seconds;
            timeUnit = 'second';
        }

        if (value > 1) {
            timeUnit += 's';
        }

        return value + ' ' + timeUnit;
    }
}

Handlebars.registerHelper('duration', function (time, previousTime) {

    return codebrowser.helper.Duration.calculate(time, previousTime);
});
;

Handlebars.registerHelper('pluralize', function (value, string) {

    if (value === 1) {
        return string;
    }

    return string + 's';
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

    /* Lines */

    var count = {

        replace:  0,
        insert:   0,
        'delete': 0

    }

    /* Differences */

    var differences = {

        insert:   [],
        replace:  [],
        'delete': [],
        all: []

    }

    /* Initialise */

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
            offset:   offset

        }

        // Ignore equal
        if (difference.type === 'equal') {
            continue;
        }

        // Replace
        if (difference.type === 'replace') {

            var originalDifference = _.clone(difference);

            var fromChange = operation[2] - operation[1] - 1;
            var toChange = operation[4] - operation[3] - 1;

            // Delta
            var lines = difference.rowEnd - difference.rowStart + 1;
            var changed = operation[2] - operation[1];
            var delta = lines - changed;

            // Replace contains deleted lines
            if (fromChange > toChange) {

                // Replace
                if (difference.rowEnd - difference.rowStart !== 0) {
                    difference.rowEnd -= (changed > delta ? changed : delta);
                }

                differences.replace.push(difference);
                differences.all.push(difference);

                // Increase replaced lines
                count.replace += difference.rowEnd - difference.rowStart + 1;

                // Delete
                difference = originalDifference;

                difference.type = 'delete';

                // Move index
                operation[1] += lines;
            }

            // Replace contains inserted lines
            if (toChange > fromChange) {

                // Replace
                difference.rowEnd -= (changed > delta ? changed : delta);

                differences.replace.push(difference);
                differences.all.push(difference);

                // Increase replaced lines
                count.replace += difference.rowEnd - difference.rowStart + 1;

                // Insert
                difference = originalDifference;

                difference.type = 'insert';
                difference.rowStart += changed;
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

            difference = _.extend(difference, { fromRowStart: operation[1],
                                                fromRowEnd: operation[2] - 1,
                                                lines: deleted });

            // Delete increases offsets
            var increase = difference.rowEnd - difference.rowStart + 1;

            offset += increase;
            deleteOffset += increase;
        }

        // Increase lines
        count[difference.type] += difference.rowEnd - difference.rowStart + 1;

        differences[difference.type].push(difference);
        differences.all.push(difference);
    }

    this.getCount = function () {

        return count;
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

    /* Cache */

    content: null,

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

        // Return content from cache
        if (this.content) {

            callback(this.content, null);

            return;
        }

        var self = this;

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (content) {

            self.content = content;

            callback(self.content, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
;

/*
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 *
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

/*
 * Fetch all courses:
 *
 * var courses = new codebrowser.collection.CourseCollection();
 *
 * Fetch courses related to a student by passing a studentId as an option for the collection:
 *
 * var courses = new codebrowser.collection.CourseCollection(null, { studentId: 1 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        /* Fetch courses related to a student */
        if (this.studentId) {
            return config.api.main.root + 'students/' + this.studentId + '/courses';
        }

        /* Fetch all courses */
        return config.api.main.root + 'courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
        }
    }
});
;

/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ id: 1 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing a studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { studentId: 1, courseId: 2 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        /* Fetch exercises related to a course */
        if (this.course) {
            return this.course.url() + '/exercises';
        }

        /* Fetch exercises related to a student and course */
        if (!this.studentId || !this.courseId) {
            throw new Error('Options studentId and courseId are required to fetch exercises.');
        }

        return config.api.main.root + 'students/' + this.studentId + '/courses/' + this.courseId + '/exercises';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
        }
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
 *
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

codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',

    template: {

        coursesContainer: Handlebars.templates.CoursesContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        // Template for courses container
        var coursesContainerOutput = $(this.template.coursesContainer(model));

        // Update courses container
        this.$el.html(coursesContainerOutput);
    }
});
;

codebrowser.view.EditorView = Backbone.View.extend({

    id: 'editor-container',

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    decorations: {

        'main-editor': [],
        'side-editor': []

    },

    markers: {

        'main-editor': [],
        'side-editor': []

    },

    insertedLines: {

        'main-editor': [],

    },

    events: {

        'click #editor-inspector': 'toggleInspector'

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

    differences: new codebrowser.model.Diff('', ''),

    /* Inspector */

    inspector: false,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Elements
        this.topContainer = $('<div>');
        this.editorElement = $('<div>', { id: 'editor' });

        // Elements for editors
        this.sideEditorElement = $('<div>', { id: 'side-editor', height: '800px' }).hide();
        this.mainEditorElement = $('<div>', { id: 'main-editor', height: '800px' });

        // Append editor elements to parent
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

    /* Reset */

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

    removeInsertedLines: function (editor) {

        var Range = ace.require('ace/range').Range;

        // Remove inserted lines from editor
        while (this.insertedLines[editor.container.id].length > 0) {

            var difference = this.insertedLines[editor.container.id].pop();

            editor.getSession().remove(new Range(difference.rowStart, 0, difference.rowEnd, 0));
        }
    },

    clearDiff: function () {

        // Remove decorations
        this.removeDecorations(this.mainEditor);
        this.removeDecorations(this.sideEditor);

        // Remove inserted lines
        this.removeInsertedLines(this.mainEditor);

        // Remove markers
        this.removeMarkers(this.mainEditor);
        this.removeMarkers(this.sideEditor);
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            previous: this.previousModel.toJSON(),
            difference: this.differences.getCount()

        }

        // Template
        var topContainerOutput = $(this.template.topContainer(_.extend(this.model.toJSON(), attributes)));

        // Editor inspector
        $('#editor-inspector', topContainerOutput).popover({ animation: false, html: true, trigger: 'click' });

        // Update top container
        this.topContainer.html(topContainerOutput);

        // Restore inspector state
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
        }
    },

    fold: function (editor, folds) {

        _.each(folds, function (fold) {

            editor.getSession().foldAll(fold.start.row, fold.end.row, 0);
        });
    },

    decorateGutter: function (editor, rowStart, rowEnd, style) {

        // Decorate gutter for lines
        for (var row = rowStart; row <= rowEnd; row++) {

            this.decorations[editor.container.id].push({ row: row, style: 'decoration gutter-' + style });

            editor.getSession().addGutterDecoration(row, 'decoration gutter-' + style);
        }
    },

    /* Update */

    setContent: function (editor, content, mode) {

        // Remember folds
        var folds = _.clone(editor.getSession().getAllFolds());

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

        // Set folds for editor
        this.fold(editor, folds);

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

        // Wait files to be in sync
        var fileSynced = _.after(2, function() {

            var previousContent = self.sideEditor.getValue();
            var content = self.mainEditor.getValue();

            // Create diff
            self.differences = new codebrowser.model.Diff(previousContent, content);

            // Re-render diff
            self.toggleDiff(self.diff);

            self.render();
        });

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Both models are the same
        if (this.previousModel === this.model) {

            // Clear differences
            this.differences = new codebrowser.model.Diff('', ''),

            // Disable split and diff view
            this.toggleSplit(false);
            this.toggleDiff(false);

        } else {

            // Restore split state if necessary
            if (!this.split) {
                this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');
            }

            // Restore diff state if necessary
            if (!this.diff) {
                this.toggleDiff(localStorage.getItem(config.storage.view.EditorView.diff) === 'true');
            }
        }

        // Fetch previous file only if the models are not the same
        if (this.previousModel !== this.model) {

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

            // If both models are the same, set the same content to the side editor
            if (self.previousModel === self.model) {
                self.setContent(self.sideEditor, content, mode);
            }

            self.setContent(self.mainEditor, content, mode);

            fileSynced();
        });

        // Show view if necessary
        this.$el.show();

        this.render();
    },

    /* Events */

    didResize: function () {

        // Relocate inspector
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
            $('#editor-inspector').popover('toggle');
        }
    },

    didSplit: function () {

        if (this.diff) {

            // Re-render diff
            this.clearDiff();
            this.toggleDiff(this.diff);
        }

        // Editors can get confused after a split
        this.mainEditor.resize();
        this.sideEditor.resize();
        this.mainEditor.renderer.updateFull();
        this.sideEditor.renderer.updateFull();
    },

    /* Actions */

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

        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });

        this.didSplit();
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

            // Show differences
            for (var i = 0; i < this.differences.getDifferences().all.length; i++) {

                var difference = this.differences.getDifferences().all[i];

                var marker;

                // Delete
                if (difference.type === 'delete') {

                    // If not in split view, show removed lines within the main editor
                    if (!this.split) {

                        // Add removed lines to main editor
                        this.mainEditor.getSession()
                                       .insert({ row: difference.rowStart + difference.offset, column: 0 },
                                               difference.lines);

                        // Decorate gutter
                        this.decorateGutter(this.mainEditor,
                                            difference.rowStart + difference.offset,
                                            difference.rowEnd + difference.offset,
                                            'delete');

                        // Remember removed lines
                        this.insertedLines['main-editor'].push({

                            rowStart: difference.rowStart + difference.offset,
                            rowEnd: difference.rowEnd + 1 + difference.offset

                        });

                    // If split view is enabled, show removed lines in side editor
                    } else {

                        // Add marker for removed line in side editor
                        marker = this.sideEditor
                                     .getSession()
                                     .addMarker(new Range(difference.fromRowStart, 0, difference.fromRowEnd, 1),
                                                difference.type,
                                                'fullLine');

                        // Decorate
                        this.decorateGutter(this.sideEditor, difference.fromRowStart, difference.fromRowEnd, 'delete');

                        // Remember marker
                        this.markers['side-editor'].push(marker);

                        continue;
                    }
                }

                var offset = 0;

                // Offset in single mode by removed lines
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
                this.decorateGutter(this.mainEditor,
                                    difference.rowStart + offset,
                                    difference.rowEnd + offset,
                                    difference.type);

                // Remember marker
                this.markers['main-editor'].push(marker);
            }

            return;
        }

        // Disable diff
        this.clearDiff();
    },

    toggleInspector: function (event) {

        event.preventDefault();

        this.inspector = !this.inspector;
    }
});
;

codebrowser.view.ErrorView = Backbone.View.extend({

    id: 'error-container',
    template: Handlebars.templates.Error,

    /* Render */

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
;

codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',

    template: {

        exercisesContainer: Handlebars.templates.ExercisesContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exercises: this.collection.toJSON()

        }

        // Template for exercises container
        var exercisesContainerOutput = $(this.template.exercisesContainer(model));

        // Update exercises container
        this.$el.html(exercisesContainerOutput);
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

    id: 'snapshot-container',

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

    /* Initialise */

    initialize: function () {

        var self = this;

        // Timeline
        this.snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        this.$el.append(this.snapshotsTimelineView.el);

        // Navigation
        this.navigationContainer = $('<div>', { id: 'navigation-container' });
        this.$el.append(this.navigationContainer);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        this.$el.append(this.editorView.el);

        // Bind resize
        this.resize = function () {

            self.didResize();
        }

        $(window).resize(this.resize);

        // Bind keydown
        this.keydown = function () {

            // Left
            if (event.keyCode === 37) {
                self.previous();
            }

            // Right
            if (event.keyCode === 39) {
                self.next();
            }
        }

        $(document).keydown(this.keydown);
    },

    /* Remove */

    remove: function () {

        // Unbind resize
        $(window).off('resize', this.resize);

        // Unbind keydown
        $(document).off('keydown', this.keydown);

        // Remove editor
        this.editorView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Render */

    render: function () {

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

    /* Update */

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

        // Update timeline
        this.snapshotsTimelineView.update(this.collection, index, filename);

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        this.render();
    },

    /* Events */

    didResize: function () {

        this.editorView.didResize();
    },

    /* Actions */

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
    },

    /* Actions - Navigation */

    navigate: function (snapshot, file, options) {

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
                                          file.id, { replace: !options ? options : options.replace });
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

codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    /* Dragging */

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        // Parent view
        this.parentView = options.parentView;

        /* jshint newcap: false */

        this.canvas = Raphael(this.el, '100%', 61);

        /* jshint newcap: true */
    },

    /* Render */

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.canvas.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshot: function (snapshot, x, y, radius) {

        var self = this;

        // Snapshot element
        var snapshotElement = self.canvas.circle(x, y, radius);
        $(snapshotElement.node).attr('class', 'snapshot');

        // Snapshot area element
        var snapshotArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);
        $(snapshotArea.node).attr('class', 'area snapshot-area');

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotElement.data('snapshot', snapshot);
        snapshotElement.data('file', file);

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotElement.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file);
        });

        snapshotElement.mouseover(function () {

            this.animate({ transform: 's1.2' }, 150);
        });

        snapshotElement.mouseout(function () {

            this.animate({ transform: 's1' }, 150);
        });
    },

    renderPointer: function (x, y, radius) {

        // Set
        var pointerSet = this.canvas.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = y + 27;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.canvas.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.canvas.path('M' +
                                        pointerX +
                                        ' ' +
                                        pointerY +
                                        ', L' +
                                        (pointerX + width / 2) +
                                        ' ' +
                                        (pointerY - width) +
                                        ', ' +
                                        (pointerX + width) +
                                        ' ' +
                                        pointerY +
                                        'Z');

        $(pointer.node).attr('class', 'pointer');

        pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.canvas.rect(x - radius, 0, radius * 2, this.canvas.height);
        $(pointerArea.node).attr('class', 'area pointer-area');

        pointerSet.push(pointerArea);

        var self = this;

        // Dragging events
        var onMove = function (dx) {

            pointerSet.transform('T ' + dx + ', 0');
        }

        var onStart = function () {

            self.dragging = true;
        }

        var onEnd = function () {

            self.dragging = false;
            self.render();
        }

        // Dragging
        pointerSet.drag(onMove, onStart, onEnd).onDragOver(function (element) {

            // Snapshot element
            if (element.data('snapshot')) {

                var index = self.collection.indexOf(element.data('snapshot'));

                // Left
                if (index > self.currentSnapshotIndex) {

                    self.parentView.next();

                // Right
                } else if (index < self.currentSnapshotIndex) {

                    self.parentView.previous();
                }
            }
        });
    },

    render: function () {

        // Clear canvas
        this.canvas.clear();

        // Center point
        var y = this.canvas.height / 2 + 3;

        var leftOffset = 0;
        var x = 0;

        var self = this;

        this.collection.each(function (snapshot, index) {

            // TODO: Weight by time between snapshots
            var distance = 100;

            // TODO: Weight by amount of differences
            var radius = 7;

            x += (radius * 2);

            // Left offset
            if (index === 0) {
                leftOffset = x;
            }

            self.renderSnapshot(snapshot, x, y, radius);

            // Draw pointer on current snapshot
            if (index === self.currentSnapshotIndex) {
                self.renderPointer(x, y, radius);
            }

            if (index !== self.collection.length - 1) {
                x += distance;
            }
        });

        this.renderTimeline(leftOffset, y, x);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename) {

        this.collection = collection;
        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        // Render if user is not dragging
        if (!this.dragging) {
            this.render();
        }
    }
});
;

codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',

    template: {

        studentsContainer: Handlebars.templates.StudentsContainer

    },

    /* Render */

    render: function () {

        var model = {

            students: this.collection.toJSON()

        }

        // Template for students container
        var studentsContainerOutput = $(this.template.studentsContainer(model));

        // Update students container
        this.$el.html(studentsContainerOutput);
    }
});
;

codebrowser.controller.ViewController = {

    view: null,

    isActive: function (view) {

        return this.view === view;
    },

    push: function (view, render) {

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }

        // Set to container
        $(config.view.container).html(this.view.el);
    }
}
;

codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView({ model: { message: 'Oops!' } });
    },

    /* Actions */

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    },

    root: function () {

        this.navigate('#/students');
    }
});
;

codebrowser.router.CourseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.courseView = new codebrowser.view.CoursesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    courses: function (studentId) {

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        var self = this;

        // Fetch course collection
        courseCollection.fetch({

            success: function () {

                self.courseView.render();
            },

            // Courses fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.courseView);
    }
});
;

codebrowser.router.ExerciseRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises': 'exercises'

    },

    /* Initialise */

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExercisesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    exercises: function (studentId, courseId) {

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId, courseId: courseId });

        this.exerciseView.collection = exerciseCollection;

        var self = this;

        // Fetch exercise collection
        exerciseCollection.fetch({

            success: function () {

                self.exerciseView.render();
            },

            // Exercises fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.exerciseView);
    }
});
;

codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots':                           'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId': 'snapshot'

    },

    /* Initialise */

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();
            codebrowser.controller.ViewController.push(this.snapshotView);
        }
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.push(errorView, true);
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

                var snapshot;

                // No snapshot ID specified, navigate to first snapshot
                if (!snapshotId) {

                    snapshot = snapshotCollection.at(0);

                    self.snapshotView.navigate(snapshot, null, { replace: true });

                    return;
                }

                // Snapshot
                snapshot = snapshotCollection.get(snapshotId);

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
;

codebrowser.router.StudentRouter = Backbone.Router.extend({

    routes: {

        'students': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    courses: function () {

        var studentCollection = new codebrowser.collection.StudentCollection();

        this.studentView.collection = studentCollection;

        var self = this;

        // Fetch student collection
        studentCollection.fetch({

            success: function () {

                self.studentView.render();
            },

            // Students fetch failed
            error: function () {

                self.notFound();
            }
        });

        codebrowser.controller.ViewController.push(this.studentView);
    }
});
