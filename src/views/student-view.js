codebrowser.view.StudentView = Backbone.View.extend({

    id: 'student-container',

    template: {

        studentContainer: Handlebars.templates.StudentContainer

    },

    render: function () {

        this.model = {

            list: this.collection.toJSON()

        }

        // Template for student container
        var studentContainerOutput = $(this.template.studentContainer(this.model));

        // Update student container
        this.$el.html(studentContainerOutput);
    }
});
