codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    /* Render */

    render: function () {

        var model = {

            students: this.collection.toJSON()

        }

        if (this.course && this.exercise) {
            model = _.extend(model, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        // Template
        var output = this.template(model);

        this.$el.html(output);
    }
});
