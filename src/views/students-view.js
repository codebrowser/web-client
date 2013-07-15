codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    /* Render */

    render: function () {

        var model = {

            students: this.collection.toJSON()

        }

        // Template
        var output = this.template(model);

        this.$el.html(output);
    }
});
