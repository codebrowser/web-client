codebrowser.models.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot +
               'students/' +
               this.get('snapshot').studentId +
               '/courses/' +
               this.get('snapshot').courseId +
               '/exercises/' +
               this.get('snapshot').exerciseId +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id, function (data) {

            callback(data, null);
        });

        request.fail(function () {

            console.log('File request failed.');
        });
    }
});
