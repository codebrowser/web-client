codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',

    template: {

        coursesContainer: Handlebars.templates.CoursesContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        // Template for courses container
        var coursesContainerOutput = $(this.template.coursesContainer(model));

        // Update courses container
        this.$el.html(coursesContainerOutput);
    }
});
