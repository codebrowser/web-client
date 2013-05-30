codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

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
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ]
});
