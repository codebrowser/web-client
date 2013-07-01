codebrowser.view.ExerciseView = Backbone.View.extend({

    id: 'exercise-container',

    template: {

        exerciseContainer: Handlebars.templates.ExerciseContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exercises: this.collection.toJSON()

        }

        // Template for exercise container
        var exerciseContainerOutput = $(this.template.exerciseContainer(model));

        // Update exercise container
        this.$el.html(exerciseContainerOutput);
    }
});
