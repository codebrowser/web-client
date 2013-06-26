codebrowser.view.CourseView = Backbone.View.extend({

    el: config.view.container,

    template: {

        courseContainer: Handlebars.templates.CourseContainer

    },

    initialize: function () {

        // Course container
        this.courseContainer = $('<div>', { id: 'course-container' });
    },

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        this.model = {

            studentId: this.collection.studentId,
            list: this.collection.toJSON()

        }

        // Append wrapper to DOM
        this.$el.append(this.courseContainer);

        // Template for course container
        var courseContainerOutput = $(this.template.courseContainer(this.model));

        // Update course container
        this.courseContainer.html(courseContainerOutput);
    }
});
