codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students/1/courses/2/exercises/3/snapshots',

    relations: [{

        type: Backbone.HasMany,
        key: 'files',
        relatedModel: 'codebrowser.models.SnapshotFile',
        collectionType: 'codebrowser.collections.SnapshotFiles',
        reverseRelation: {

            key: 'snapshot'

        }

    }]

});
