codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId': 'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId': 'snapshot'

    },

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        // Create snapshot view when necessary
        if (!this.snapshotView) {
            this.snapshotView = new codebrowser.view.SnapshotView();
        }
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

                // Current
                var currentSnapshot = snapshotCollection.get(snapshotId);

                // Previous
                var index = snapshotCollection.indexOf(currentSnapshot);
                var previousSnapshot = snapshotCollection.at(index - 1);

                // Invalid snapshot ID
                if (!currentSnapshot) {

                    self.snapshotView = null;
                    new codebrowser.view.ErrorView({ model: { message: 'No snapshot found with given ID.' } });

                    return;
                }

                self.snapshotView.setModel(previousSnapshot, currentSnapshot, fileId);
            },

            // Snapshots fetch failed
            error: function () {

                self.snapshotView = null;
                new codebrowser.view.ErrorView({ model: { message: 'Failed fetching snapshots.' } });

                return;
            }
        });
    }
});
