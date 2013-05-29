codebrowser.models.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot + 'students/1/courses/2/exercises';
    }
});
