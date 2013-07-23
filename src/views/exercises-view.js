codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            course: this.course.toJSON(),
            exercises: this.collection.toJSON()

        }

        if (this.student) {
            model = _.extend(model, { student: this.student.toJSON() });
        }

        // Template
        var output = this.template(model);

        this.$el.html(output);
    }
});
