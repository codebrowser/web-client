/*
 *
 *
 */

codebrowser.collection.CommentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Comment,

    url: function () {

        /* Fetch comments for given course, student and exercise */
        if (this.studentId && this.courseId && this.exerciseId) {
            return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/comments';
        }
        else
        {
            return config.api.main.root + 'comments';
        }
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
