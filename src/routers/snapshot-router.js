codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:id': 'snapshot'

    },

    initialize: function () {

        this.snapshotView = new codebrowser.view.SnapshotView();
    },

    snapshot: function (studentId, courseId, exerciseId, id) {

        var snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                var snapshot = snapshotCollection.get(id);

                if (!snapshot) {

                    console.log('No snapshot found with given ID.');
                    return;
                }

                self.snapshotView.setModel(snapshot);
            },

            error: function () {

                console.log('Failed fetching snapshots.');
            }
        });
    }
});
