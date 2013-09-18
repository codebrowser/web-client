/*
 * Fetch tags by passing either tagNameId or studentId, courseId and exerciseId as options for the collection:
 *
 * var tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.TagCollection = Backbone.Collection.extend({

    model: codebrowser.model.Tag,

    url: function () {

        /* Fetch tags with given name */
        if (this.tagNameId) {
            return config.api.main.root + 'tagnames/' + this.tagNameId + '/tags';
        }

        /* Fetch tags for given course, student and exercise */
        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch tags.');
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

    initialize: function (models, options) {

        if (options) {
            this.tagNameId = options.tagNameId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
