codebrowser.models.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (data) {

            callback(data, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
