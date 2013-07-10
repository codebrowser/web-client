codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exercises: this.collection.toJSON()

        }

        // Template
        var output = $(this.template(model));

        this.$el.html(output);
    }
});
