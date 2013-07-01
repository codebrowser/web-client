codebrowser.view.ExerciseView = Backbone.View.extend({

    id: 'exercise-container',

    template: {

        exerciseContainer: Handlebars.templates.ExerciseContainer

    },

    render: function () {

        this.model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            list: this.collection.toJSON()

        }

        // Template for exercise container
        var exerciseContainerOutput = $(this.template.exerciseContainer(this.model));

        // Update exercise container
        this.$el.html(exerciseContainerOutput);
    }
});
