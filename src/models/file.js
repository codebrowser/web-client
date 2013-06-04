/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               (this.get('snapshot').get('studentId') || this.get('snapshot').collection.studentId) +
               '/courses/' +
               (this.get('snapshot').get('courseId') || this.get('snapshot').collection.courseId) +
               '/exercises/' +
               (this.get('snapshot').get('exerciseId') || this.get('snapshot').collection.exerciseId) +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    /* Callback parameters (content, [error]) are the received data and possible error, respectively. */

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (content) {

            callback(content, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
