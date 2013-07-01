codebrowser.view.StudentView = Backbone.View.extend({

    id: 'student-container',

    template: {

        studentContainer: Handlebars.templates.StudentContainer

    },

    /* Render */

    render: function () {

        var model = {

            students: this.collection.toJSON()

        }

        // Template for student container
        var studentContainerOutput = $(this.template.studentContainer(model));

        // Update student container
        this.$el.html(studentContainerOutput);
    }
});
