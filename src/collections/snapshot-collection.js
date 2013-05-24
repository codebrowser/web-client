codebrowser.collections.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.models.Snapshot,

    url: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots/';
    },

    printSnapshotFile: function () {

        console.log(this.models);

        for (var i=0; i < this.models.length; ++i) {

            console.log(this.models[i].get('files').models[0]);
        }
    }
});
