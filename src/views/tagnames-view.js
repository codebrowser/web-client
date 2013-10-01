codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            snapshotTagNames: this.snapshotTagNames.toJSON(),
            exerciseAnswerTagNames: this.exerciseAnswerTagNames.toJSON()

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
