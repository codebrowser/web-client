codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = new codebrowser.models.Snapshot({ id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                var template = $('#snapshot-template').html();

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    var output = Mustache.render(template, { data: data });
                    $('#container').html(output);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
