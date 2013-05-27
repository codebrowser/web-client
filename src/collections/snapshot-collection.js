codebrowser.collections.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.models.Snapshot,

    url: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots';
//        return this.get('exercises').urlRoot() + '/' + this.get('exercises').id + '/snapshots';
    }
});
