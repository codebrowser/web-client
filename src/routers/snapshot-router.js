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

                    new codebrowser.view.ErrorView({ model: { message: 'No snapshot found with given ID.' } });

                    return;
                }

                self.snapshotView.setModel(snapshot, fileId);
            },

            error: function () {

                new codebrowser.view.ErrorView({ model: { message: 'Failed fetching snapshots.' } });
            }
        });
    }
});
