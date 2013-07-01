codebrowser.view.CourseView = Backbone.View.extend({

    id: 'course-container',

    template: {

        courseContainer: Handlebars.templates.CourseContainer

    },

    render: function () {

        this.model = {

            studentId: this.collection.studentId,
            list: this.collection.toJSON()

        }

        // Template for course container
        var courseContainerOutput = $(this.template.courseContainer(this.model));

        // Update course container
        this.$el.html(courseContainerOutput);
    }
});
