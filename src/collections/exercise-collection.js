codebrowser.collections.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Exercise,

    url: function () {

        return this.course.urlRoot + '/' + this.course.id + '/exercises';
    }
});
