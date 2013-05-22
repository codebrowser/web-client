codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'read'

    },

    render: function (data) {

        new codebrowser.views.SnapshotView({ el: $('#container'), model: data });
    },

    read: function (id) {

        var self = this;

        var snapshot = new codebrowser.models.Snapshot({ id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    self.render(data);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
