codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = codebrowser.models.Snapshot.findOrCreate({ id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    new codebrowser.views.SnapshotView({ el: $('#container'), model: data });

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
