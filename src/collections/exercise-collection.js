/*
 * ExerciseCollection is resolved through a course.
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        return this.course.url() + '/exercises';
    }
});
