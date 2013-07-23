codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            student: this.student.toJSON(),
            courses: this.collection.toJSON()

        }

        // Template
        var output = this.template(model);

        this.$el.html(output);
    }
});
