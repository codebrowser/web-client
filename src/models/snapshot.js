codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots';
//        return this.get('exercises').urlRoot() + '/' + this.get('exercises').id + '/snapshots';
    },

    relations: [{

        type: Backbone.HasMany,
        key: 'files',
        relatedModel: 'codebrowser.models.File',
        collectionType: 'codebrowser.collections.FileCollection',
//        autoFetch: true,
        reverseRelation: {

            key: 'snapshot'

        }
    }]
});
