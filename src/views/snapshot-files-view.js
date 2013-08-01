codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;
    },

    /* Render */

    renderDifferences: function (output) {

        var self = this;

        this.parentView.collection.getDifferences(function (differences) {

            var index = self.parentView.collection.indexOf(self.model);
            var difference = differences[index];

            var files = self.model.get('files');

            files.each(function (file) {

                var fileDifference = difference[file.get('name')];
                var fileElement = $('[data-id="' + file.id + '"]', output);

                var lines = file.lines();
                var changed = fileDifference.getCount().total();

                // New file
                if (changed === lines) {
                    fileElement.addClass('new');
                }

                // Modified file
                if (changed > 0 && changed !== lines) {
                    fileElement.addClass('modified');
                }
            });
        });
    },

    render: function () {

        // Template
        var output = $(this.template(this.model.toJSON()));

        if (this.parentView.editorView.diff) {

            // Render new and modified files
            this.renderDifferences(output);
        }

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
