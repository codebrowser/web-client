codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        return this.course.urlRoot + '/' + this.course.id + '/exercises';
    }
});
