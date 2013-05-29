codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    initialize: function () {

        this.snapshotView = new codebrowser.views.SnapshotView({ el: $('#container') });
    },

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:id': 'read'

    },

    read: function (studentId, courseId, exerciseId, id) {

        var snapshotCollection = new codebrowser.collections.SnapshotCollection(null, { studentId: studentId, courseId: courseId, exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                var snapshot = snapshotCollection.get(id);
                self.snapshotView.setModel(snapshot);

                new codebrowser.views.EditorView({ el: $('#view'), model: snapshot.get('files').at(0) });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
