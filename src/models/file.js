codebrowser.models.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots/' + this.get('snapshot').id + '/files';
    },

    fetchContent: function (callback) {

        $.get(this.urlRoot() + '/' + this.id, function (data) {

            callback(data);
        });
    }
});
