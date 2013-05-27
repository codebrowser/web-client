codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('exercises').urlRoot() + '/' + this.get('exercises').id + '/snapshots';
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
