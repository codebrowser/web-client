codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    initialize: function () {

        this.snapshotCollection = new codebrowser.collections.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
        this.snapshotCollection.fetch({async:false});

        this.snapshotView = new codebrowser.views.SnapshotView({ el: $('#container'), collection: this.snapshotCollection });
    },

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = this.snapshotCollection.get(id);
        var self = this;

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                self.snapshotView.setModel(snapshot);

                var fileName = snapshot.get('files').at(0).get('name');
                var syntaxMode = codebrowser.helpers.aceModeMapper.getMode(fileName);

                var editorView = new codebrowser.views.EditorView({ el: $('#view') });

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    editorView.setContent(data, syntaxMode);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    },

    navigateTo: function (id) {

        this.navigate('#/snapshots/' + id);
    }
});
