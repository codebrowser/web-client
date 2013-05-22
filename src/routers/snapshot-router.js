codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'snapshots/:id': 'getSnapshot'

    },

    getSnapshot: function (id) {

        var snapshot = new codebrowser.models.Snapshot({id: id});

        snapshot.fetch({

            success: function () {

                console.log('Received data from backend...');

                console.log(snapshot);

                var template = $('#snapshot-template').html();
                var output = Mustache.render(template, { data: 'Test' });

                $('#container').html(output);

                console.log('Done.');
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }

});
