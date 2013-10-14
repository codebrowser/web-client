codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,

    url: function () {

        if (this.courseId && this.exerciseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/exercises/' + this.exerciseId + '/students';
        }

        if (this.courseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/students';
        }

        return config.api.main.root + 'students';
    },

    initialize: function (models, options) {

        if (options) {
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    },


    byPartialName: function(queryString) {

        var filtered = this.filter(function(student) {
            return (student.get('name').indexOf(queryString) !== -1);
        });

        return new codebrowser.collection.StudentCollection(filtered);
    }
});
