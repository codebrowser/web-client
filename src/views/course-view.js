codebrowser.view.CourseView = Backbone.View.extend({

    id: 'course-container',

    template: {

        courseContainer: Handlebars.templates.CourseContainer

    },

    /* Render */

    render: function () {

        var model = {

            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        // Template for course container
        var courseContainerOutput = $(this.template.courseContainer(model));

        // Update course container
        this.$el.html(courseContainerOutput);
    }
});
