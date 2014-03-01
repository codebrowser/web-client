codebrowser.view.SelectView = Backbone.View.extend({

    id: 'select-container',
    template: Handlebars.templates.SelectContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            course: this.course.toJSON()
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
