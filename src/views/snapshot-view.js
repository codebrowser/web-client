codebrowser.view.SnapshotView = Backbone.View.extend({

    el: config.view.container,

    template: {

        navigationContainer: Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #split':    'split',
        'click #first':    'first',
        'click #previous': 'previous',
        'click #next':     'next',
        'click #last':     'last'

    },

    initialize: function () {

        // Empty container
        this.$el.empty();
        this.$el.undelegate();

        // Create divs for elements
        this.navigationContainer = $('<div>', { id: 'navigation-container' });
        this.editorContainer = $('<div>', { id: 'editor-container' });

        // Append elements to parent
        this.$el.append(this.navigationContainer);
        this.$el.append(this.editorContainer);

        // Editor
        this.editorView = new codebrowser.view.EditorView({ el: this.editorContainer });
    },

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            exerciseId: this.collection.exerciseId,
            current: index + 1,
            total: this.collection.length

        }

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer($.extend(this.model.toJSON(), attributes)));

        // Split view is enabled
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        } else if (!this.editorView.canSplit) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // First snapshot, disable the buttons for split, first and previous
        if (index === 0) {
            $('#split', navigationContainerOutput).attr('disabled', true);
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable the buttons for next and last
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Previous snapshot
        var index = this.collection.indexOf(snapshot);
        var previousSnapshot = this.collection.at(index - 1);

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;
        }

        // Show first file if no fileId is specified
        if (!fileId) {
            this.editorView.update(previousSnapshot.get('files').at(0), this.model.get('files').at(0));
        } else {

            // Determine same file across snapshots
            var fileName = this.model.get('files').get(fileId).get('name');
            var previousFile = previousSnapshot.get('files').findWhere({ name: fileName });
            var previousFileId;

            if (!previousFile) {
                previousSnapshot = this.model;
                previousFileId = fileId;
            } else {
                previousFileId = previousFile.id;
            }

            // TODO: Disable split if file doesn't have a previous snapshot
            this.editorView.update(previousSnapshot.get('files').get(previousFileId), this.model.get('files').get(fileId));

            this.fileId = fileId;
        }

        this.render();
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    navigate: function (id, fileId) {

        var url = '#/students/' +
                  this.collection.studentId +
                  '/courses/' +
                  this.collection.courseId +
                  '/exercises/' +
                  this.collection.exerciseId +
                  '/snapshots/' +
                  id;

        if (fileId) {
            url += '/files/'+fileId;
        }

        codebrowser.app.snapshot.navigate(url);
    },

    first: function () {

        var first = this.collection.at(0);

        var firstFileId = this.getFileId(first);

        this.navigate(first.id, firstFileId);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);
        var previous = this.collection.at(index - 1);

        var previousFileId = this.getFileId(previous);
        console.log(previousFileId);

        this.navigate(previous.id, previousFileId);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);
        var next = this.collection.at(index + 1);

        var nextFileId = this.getFileId(next);

        this.navigate(next.id, nextFileId);
    },

    last: function () {

        var last = this.collection.at(this.collection.length - 1);

        var lastFileId = this.getFileId(last);

        this.navigate(last.id, lastFileId);
    },

    getFileId: function (snapshot) {

        if (this.fileId) {

            // Get file name
            var fileName = this.editorView.model.get('name');

            // Return the first file that matches given attributes
            var file = snapshot.get('files').findWhere({ name: fileName });

            this.fileId = null;

            if (!file) {
                return null;
            } else {
                return file.id;
            }
        }

        return null;
    }
});
