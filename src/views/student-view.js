codebrowser.view.StudentView = Backbone.View.extend({

    el: config.view.container,

    template: {

        studentContainer: Handlebars.templates.StudentContainer

    },

    initialize: function () {

        // Student container
        this.studentContainer = $('<div>', { id: 'student-container' });
    },

    remove: function () {

        // Empty container
        this.$el.empty();
    },

    render: function () {

        this.model = {

            list: this.collection.toJSON()

        }

        // Append wrapper to DOM
        this.$el.append(this.studentContainer);

        // Template for student container
        var studentContainerOutput = $(this.template.studentContainer(this.model));

        // Update student container
        this.studentContainer.html(studentContainerOutput);
    }
});
