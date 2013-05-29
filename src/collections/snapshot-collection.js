codebrowser.collections.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.models.Snapshot,

    initialize: function (models, options) {

        this.studentId = options.studentId;
        this.courseId = options.courseId;
        this.exerciseId = options.exerciseId;
    },

    url: function () {

        return config.apiRoot +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    }
});
