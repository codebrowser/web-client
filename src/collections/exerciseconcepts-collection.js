/*
 * ConceptCollection is resolved through a snapshot.
 */

codebrowser.collection.ExerciseConceptsCollection = Backbone.Collection.extend({

    model: codebrowser.model.Concept,

    comparator: 'name',

    initialize: function(models, options) {

        if (models) {

            this.models = models;
        }

        if (options) {

            if (options.studentId) {
                this.studentId = options.studentId;
            }

            if (options.courseId) {
                this.courseId = options.courseId;
            }

            if (options.exerciseId) {
                this.exerciseId = options.exerciseId;
            }

        }
    },

    url: function () {

        return config.api.main.root +
            'students/' +
            this.studentId +
            '/courses/' +
            this.courseId +
            '/exercises/' +
            this.exerciseId +
            '/concepts/';
    },

    getMaxSize : function () {

        var max = 0;

        for (var i = 0; i < this.size(); i++) {

            max = Math.max( max, this.at(i).get('size') );
        }

        return max;
    }
});
