codebrowser.collections.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Exercise,

    url: function () {

        return this.get('course').urlRoot() + '/' + this.get('course').id + '/exercises';
    }
});
