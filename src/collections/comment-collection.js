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
        if (this.studentId && this.courseId && this.exerciseId && this.snapshotId) {

            if (this.page === undefined) {
                
                this.page = 0;
            }

            return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots/' +
               this.snapshotId +
               '/comments?page='+
               this.page+
               '&size='+
               this.pagesize;
        }

        else {

            if ( this.page >= 0) {

                return config.api.main.root + 'comments?page='+this.page+'&size='+this.pagesize;
            }

            return config.api.main.root + 'comments?page='+0+'&size='+this.pagesize;
        }
    },

    initialize: function (models, options) {

        this.pagesize = 10;

        if (options) {

            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
            this.snapshotId = options.snapshotId;
            this.page = options.page;
        }
    },

    /* Filtering currently done in backend, needed only if filtering should be done in frontend

    bySnapshotId: function (id) {

        var filtered = this.filter(function(comment) {

            var snapshot = comment.get('snapshot');

            // Collect all comments which have given id or
            // doesn't have snapshot at all (exercise comments).
            return (snapshot === null || snapshot.id === id);
        });

        return new codebrowser.collection.CommentCollection(filtered);
    },*/

});
