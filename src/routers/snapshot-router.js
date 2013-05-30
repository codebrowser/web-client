codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:id': 'snapshot'

    },

    initialize: function () {

        this.snapshotView = new codebrowser.view.SnapshotView({ el: $(config.view.container) });
    },

    snapshot: function (studentId, courseId, exerciseId, id) {

        var snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId, courseId: courseId, exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                var snapshot = snapshotCollection.get(id);
                self.snapshotView.setModel(snapshot);

                new codebrowser.view.EditorView({ el: $('#editor-container'), model: snapshot.get('files').at(0) });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
