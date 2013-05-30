codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                var editorView = new codebrowser.view.EditorView({ el: $('#container') });

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
