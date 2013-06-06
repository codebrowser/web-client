this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Editor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</span>\n\n</header>\n\n<div id='editor'></div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Oops!</p>\n";
  });

this["Handlebars"]["templates"]["Snapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

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
    + "'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n            ";
  return buffer;
  }

  buffer += "<div class='row'>\n\n    <div class='span8'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'>Files <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.files) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.files; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.files) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n\n        </div>\n\n    </div>\n\n    <div class='span4'>\n\n        <div class='btn-group pull-right'>\n            <input type='button' id='previous' class='btn' value='Previous'>\n            <input type='button' id='next' class='btn' value='Next'>\n        </div>\n\n    </div>\n\n</div>\n\n<div id='editor-container'></div>\n";
  return buffer;
  });;

/* exported config */

/* Global configuration */

var config = {

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
            editor.setTheme('ace/theme/crimson_editor');
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
    router: {},

    initialize: function () {

        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

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
               (this.get('snapshot').get('studentId') || this.get('snapshot').collection.studentId) +
               '/courses/' +
               (this.get('snapshot').get('courseId') || this.get('snapshot').collection.courseId) +
               '/exercises/' +
               (this.get('snapshot').get('exerciseId') || this.get('snapshot').collection.exerciseId) +
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
        }
    ]
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

    template: Handlebars.templates.Editor,

    render: function (content, mode) {

        // Template
        var output = this.template(this.model.toJSON());

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
;

codebrowser.view.ErrorView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Error,

    render: function() {

        this.$el.html(this.template);
    }
});
;

codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,
    template: Handlebars.templates.Snapshot,

    events: {

        'click #previous': 'previous',
        'click #next':     'next'
    },

    initialize: function () {

        this.model = new codebrowser.model.Snapshot();
        this.collection = new codebrowser.collection.SnapshotCollection();

        this.render();

        // Editor
        this.editorView = new codebrowser.view.EditorView();
    },

    render: function () {

        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exerciseId: this.collection.exerciseId

        }

        // Template
        var output = this.template($.extend(this.model.toJSON(), attributes));

        this.$el.html(output);

        var index = this.collection.indexOf(this.model);

        // First snapshot, disable button for previous
        if (index === 0) {
            $('#previous').attr('disabled', true);
        }

        // Last snapshot, disable button for next
        if (index === this.collection.length - 1) {
            $('#next').attr('disabled', true);
        }
    },

    setModel: function (model, fileId) {

        this.model = model;
        this.render();

        // Update editor
        this.editorView.setElement('#editor-container');

        // Show first file if no fileId is specified
        if (!fileId) {
            this.editorView.setModel(this.model.get('files').at(0));
        } else {
            this.editorView.setModel(this.model.get('files').get(fileId));
        }
    },

    navigate: function (id) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          this.collection.studentId +
                                          '/courses/' +
                                          this.collection.courseId +
                                          '/exercises/' +
                                          this.collection.exerciseId +
                                          '/snapshots/' +
                                          id);
    },

    previous: function (event) {

        event.preventDefault();

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        this.navigate(previous.id);
    },

    next: function (event) {

        event.preventDefault();

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        this.navigate(next.id);
    }
});
;

codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'notFound'

    },

    initialize: function () {

        this.errorView = new codebrowser.view.ErrorView();
    },

    notFound: function () {

        console.log('Caught!');

        this.errorView.render();
    }
});
;

codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId': 'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId': 'snapshot'

    },

    initialize: function () {

        this.snapshotView = new codebrowser.view.SnapshotView();
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId) {

        var snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                var snapshot = snapshotCollection.get(snapshotId);

                if (!snapshot) {

                    console.log('No snapshot found with given ID.');
                    return;
                }

                self.snapshotView.setModel(snapshot, fileId);
            },

            error: function () {

                console.log('Failed fetching snapshots.');
            }
        });
    }
});
