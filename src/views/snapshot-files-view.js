codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    /* Render */

    render: function () {

        // Template
        var output = $(this.template(this.model.toJSON()));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.model = snapshot;

        this.render();
    }
});
