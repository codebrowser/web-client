codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    initialize: function (options) {
        
        this.parentView = options.parentView;
    },

    /* Render */

    renderColours: function (output) {
        
        var self = this;
        
        this.parentView.collection.getDifferences(function (differences) {
            
            var index = self.parentView.collection.indexOf(self.model);
            var difference = differences[index];

            var files = self.model.get('files');
            
            files.each(function (file) {

                var fileDifference = difference[file.get('name')];
                var fileElement = $('[data-id="' + file.id + '"]', output);
                
                var lines = file.lines();
                var total = fileDifference.getCount().total();
                
                // New file, colour as green
                if (total === lines) {
                    fileElement.addClass('new');
                }
                
                // Modified file, colour as blue
                if (total > 0 && total < lines) {
                    fileElement.addClass('modified');
                }
            });
        });
    },

    render: function () {

        // Template
        var output = $(this.template(this.model.toJSON()));

        if (this.parentView.editorView.diff) {
            // Render colours on new and modified files
            this.renderColours(output);
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
