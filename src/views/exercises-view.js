codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            course: this.course.toJSON(),
            exercises: this.collection.toJSON(),
            viewPath: this.viewPath
        }

        if (this.student) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
