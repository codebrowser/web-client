codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            student: this.student.toJSON(),
            courses: this.collection.toJSON()

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
