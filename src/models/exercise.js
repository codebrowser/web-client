codebrowser.models.Exercise = Backbone.RelationalModel.extend({

    initialize: function () {
        this.fetch();
    },

    urlRoot: function () {

        return config.apiRoot + 'students/1/courses/2/exercises';
//        return this.get('course').urlRoot() + '/' + this.get('course').id + '/exercises';
    },

    hello: function () {
        console.log('hello');
        console.log(this.get('course'));
    },

    relations: [{

        type: Backbone.HasMany,
        key: 'snapshots',
        relatedModel: 'codebrowser.models.Snapshot',
        collectionType: 'codebrowser.collections.SnapshotCollection',
//        autoFetch: true,
        reverseRelation: {

            key: 'exercise'

        }
    }]
});
