codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId': 'snapshot'

    },

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        // Create snapshot view when necessary
        if (!this.snapshotView || codebrowser.controller.ViewController.view !== this.snapshotView) {
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
