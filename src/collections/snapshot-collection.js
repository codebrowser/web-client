/*
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,
    differences: [],

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    },

    getDuration: function (fromIndex, toIndex) {

        return this.at(fromIndex).get('snapshotTime') - this.at(toIndex).get('snapshotTime');
    },

    getMinDuration: function () {

        var self = this;

        var min = Number.MAX_VALUE;

        // Find min duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new min
            if (duration < min) {
                min = duration;
            }
        });

        return min;
    },

    getMaxDuration: function () {

        var self = this;

        var max = Number.MIN_VALUE;

        // Find max duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new max
            if (duration > max) {
                max = duration;
            }
        });

        return max;
    },

    getDifference: function (index, filename) {

        var difference = this.differences[index];

        if (!difference) {
            return null;
        }

        return difference[filename];
    },

    getDifferences: function (callback) {

        if (this.differences.length === this.length) {
            callback(this.differences);
            return;
        }

        var self = this;

        this.each(function (snapshot, index) {

            var previousSnapshot = self.at(index - 1);

            // Divide diffs by snapshot indexes
            if (!self.differences[index]) {

                self.differences[index] = {

                    total: 0,
                    lines: 0

                }
            }

            var files = snapshot.get('files');

            // Calculate differences for every file of each snapshot
            files.each(function (file, i) {

                var filename = file.get('name');

                // Create namespace for every file name
                if (!self.differences[index].filename) {
                    self.differences[index][filename] = null;
                }

                var currentFile = file;
                var previousFile = null;

                // If previous snapshot doesn't exist, current file doesn't have earlier version of it
                if (!previousSnapshot) {

                    // Set previous file to current file
                    previousFile = currentFile;

                } else {

                    // Get previous version of the current file from the previous snapshot
                    previousFile = previousSnapshot.get('files').findWhere({ name: filename });
                }

                // Couldn't find file from previous snapshot, set previous file to current file
                if (!previousFile) {
                    previousFile = currentFile;
                }

                // Bind necessary context for fetching
                var context = {

                    currentFile: currentFile,
                    previousFile: previousFile,
                    snapshotIndex: index,
                    fileIndex: i,

                    // Wait files to be in sync
                    fileSynced: _.after(2, function () {

                        var snapshotIndex = context.snapshotIndex;
                        var fileIndex = context.fileIndex;

                        var filename = context.currentFile.get('name');
                        var previousContent = context.previousFile.getContent();

                        // New file
                        if (context.previousFile === context.currentFile) {
                            previousContent = '';
                        }

                        // Create difference
                        var difference = new codebrowser.model.Diff(previousContent, context.currentFile.getContent());

                        // Count how many lines were in snapshot's files overall and how many lines of them changed
                        self.differences[snapshotIndex].total += difference.getCount().total();
                        self.differences[snapshotIndex].lines += context.currentFile.lines();

                        self.differences[snapshotIndex][filename] = difference;

                        // Diffed last file of last snapshot, return diffs
                        if (snapshotIndex === self.length - 1 && fileIndex === self.at(snapshotIndex).get('files').length - 1) {
                            callback(self.differences);
                        }
                    })
                }

                // Fetch previous file only if the models are not the same
                if (previousFile !== currentFile) {

                    previousFile.fetchContent(function (content, error) {

                        if (error) {
                            throw new Error('Failed file fetch.');
                        }

                        this.fileSynced();

                    }.bind(context));
                }

                // Fetch current file
                currentFile.fetchContent(function (content, error) {

                    if (error) {
                        throw new Error('Failed file fetch.');
                    }

                    // If both models are the same, current model is a new file, set empty content to previous
                    if (this.currentFile === this.previousFile) {

                        this.fileSynced();
                    }

                    this.fileSynced();

                }.bind(context));

            });
        });
    }
});
