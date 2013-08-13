/*
 * Fetch a tag by passing a studentId, courseId and exerciseId as options for the model:
 *
 * var tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { studentId: 1, courseId: 2, exerciseId: 3 });
 *
 * Create a new tag the same way:
 *
 * var tag = new codebrowser.model.Tag({ text: 'Tag' }, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.model.Tag = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a tag.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/tags';
    },

    initialize: function (attributes, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.studentId = this.collection.studentId;
            this.courseId = this.collection.courseId;
            this.exerciseId = this.collection.exerciseId;
        }
    }
});
