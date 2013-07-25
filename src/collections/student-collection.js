codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,

    url: function () {

        if (this.courseId && this.exerciseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/exercises/' + this.exerciseId + '/students';
        }

        return config.api.main.root + 'students';
    },

    initialize: function (options) {

        if (options) {
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }

});
