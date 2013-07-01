codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',

    template: {

        exercisesContainer: Handlebars.templates.ExercisesContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exercises: this.collection.toJSON()

        }

        // Template for exercises container
        var exercisesContainerOutput = $(this.template.exercisesContainer(model));

        // Update exercises container
        this.$el.html(exercisesContainerOutput);
    }
});
