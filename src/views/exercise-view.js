codebrowser.view.ExerciseView = Backbone.View.extend({

    el: config.view.container,

    template: {

        exerciseContainer: Handlebars.templates.ExerciseContainer

    },

    initialize: function () {

        // Exercise container
        this.exerciseContainer = $('<div>', { id: 'exercise-container' });
    },

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        this.model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            list: this.collection.toJSON()

        }

        // Append wrapper to DOM
        this.$el.append(this.exerciseContainer);

        // Template for exercise container
        var exerciseContainerOutput = $(this.template.exerciseContainer(this.model));

        // Update exercise container
        this.exerciseContainer.html(exerciseContainerOutput);
    },

    update: function () {

        this.render();
    }
});
