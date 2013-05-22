codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students/1/courses/2/exercises/3/snapshots',

    relations: [{

        type: Backbone.HasMany,
        key: 'files',
        relatedModel: 'codebrowser.models.File',
        collectionType: 'codebrowser.collections.FileCollection',
        reverseRelation: {

            key: 'snapshot'

        }
    }]
});
