codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',

    template: {

        studentsContainer: Handlebars.templates.StudentsContainer

    },

    /* Render */

    render: function () {

        var model = {

            students: this.collection.toJSON()

        }

        // Template for students container
        var studentsContainerOutput = $(this.template.studentsContainer(model));

        // Update students container
        this.$el.html(studentsContainerOutput);
    }
});
