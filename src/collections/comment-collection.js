/*
 *
 *
 */

codebrowser.collection.CommentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Comment,

    comparator: function(comment) {
        // comments by timestamp in descending order
        return -comment.get('createdAt');
    },

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
    },

    bySnapshotId: function (id) {
        var filtered = this.filter(function(comment) {
            var snapshot = comment.get('snapshot');

            // Collect all comments which have given id or
            // doesn't have snapshot at all (exercise comments).
            return (snapshot === null || snapshot.id === id);
        });

        return new codebrowser.collection.CommentCollection(filtered);
    }
});
