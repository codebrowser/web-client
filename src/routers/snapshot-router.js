codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    initialize: function () {

        this.snapshotCollection = new codebrowser.collections.SnapshotCollection();
        this.snapshotCollection.fetch({async:false});
    },

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = this.snapshotCollection.get(id);
        var snapshotView = new codebrowser.views.SnapshotView({ el: $('#container'), collection: this.snapshotCollection });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                snapshotView.setModel(snapshot);

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
