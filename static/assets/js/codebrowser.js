/* exported config */

/* Configuration */

var config = {

    apiRoot: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/',

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);

            // Text
            editor.setTheme('ace/theme/github');
            editor.setFontSize(12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
;/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    models: {},
    collections: {},
    views: {},
    routers: {},

    initialize: function () {

        codebrowser.app.snapshot = new codebrowser.routers.SnapshotRouter();
        Backbone.history.start();
    }
}
;codebrowser.models.Course = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'courses',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.models.Exercise',
            collectionType: 'codebrowser.collections.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ]
});
;codebrowser.models.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('course').urlRoot + '/' + this.get('course').id + '/exercises';
    }
});
;codebrowser.models.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot +
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

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (data) {

            callback(data, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
;codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.apiRoot +
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
            relatedModel: 'codebrowser.models.File',
            collectionType: 'codebrowser.collections.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ]
});
;codebrowser.models.Student = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.models.Course',
            collectionType: 'codebrowser.collections.CourseCollection'
        }
    ]
});
;codebrowser.collections.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Course,
    url: config.apiRoot + 'courses'

});
;codebrowser.collections.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Exercise,

    url: function () {

        return this.course.urlRoot + '/' + this.course.id + '/exercises';
    }
});
;codebrowser.collections.FileCollection = Backbone.Collection.extend({

    model: codebrowser.models.File,

    url: function () {

        return config.apiRoot +
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
;codebrowser.collections.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.models.Snapshot,

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.apiRoot +
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
;codebrowser.collections.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.models.Student,
    url: config.apiRoot + 'students'

});
;codebrowser.views.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var template = $('#editor-template').html();
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);

        // Set syntax mode
        this.editor.getSession().setMode('ace/mode/java');
    },

    setContent: function (content) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();
    }
});
;codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = codebrowser.models.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                var editorView = new codebrowser.views.EditorView({ el: $('#container') });

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    editorView.setContent(data);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
