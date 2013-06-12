/*
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.api.main.root +
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
        },

        {
            type: Backbone.HasOne,
            key: 'course',
            relatedModel: 'codebrowser.model.Course'
        }
    ],

    initialize: function () {

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.set('studentId', this.collection.studentId);
            this.set('courseId', this.collection.courseId);
            this.set('exerciseId', this.collection.exerciseId);
        }
    }
});
