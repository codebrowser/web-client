codebrowser.collections.SnapshotFiles = Backbone.Collection.extend({

    model: codebrowser.models.SnapshotFile,

    url: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots/' + this.get('snapshot').id + '/files'
    }

});
