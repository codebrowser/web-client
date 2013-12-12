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

        if (this.studentId && this.courseId && this.exerciseId && this.snapshotId) {

            // Comments for given course, student, exercise and snapshot
            return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots/' +
               this.snapshotId +
               '/comments'+
               this._getQueryString();
        } else {

            // All comments
            return config.api.main.root + 'comments' + this._getQueryString();
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
            this.query = options.query;
        }
    },

    /* Configure pagination and optional search string */

    _getQueryString: function() {

        var q = '?page=' + (this.page !== undefined ? this.page : 0);
        q += '&size=' + config.commentsView.pageSize;

        if (this.query !== undefined && this.query !== '') {

            q += '&query=' + encodeURIComponent(this.query);
        }

        return q;
    }

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
