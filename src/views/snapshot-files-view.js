codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    /* Render */

    render: function () {

        // Template
        var output = $(this.template(this.model.toJSON()));

        // Active file
        var activeFileElement = $('[data-id="' + this.file.id + '"]', output);
        activeFileElement.addClass('active');

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot, file) {

        this.model = snapshot;
        this.file = file;

        this.render();
    }
});
