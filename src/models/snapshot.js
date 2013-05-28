codebrowser.models.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot +
               'students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.models.File',
            collectionType: 'codebrowser.collections.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ]
});
