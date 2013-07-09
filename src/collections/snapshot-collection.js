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

    getDifferences: function() {

        if (this.differences.length > 0) {
            return this.differences;
        }

        var previousContent = null;
        var currentContent = null;

        var syncCalls = 0;

        var self = this;

        // Wait files to be in sync
        var fileSynced = function(filename) {

            ++syncCalls;

            if (!self.differences[filename]) {
                self.differences[filename] = [];
            }

            if (syncCalls % 2 === 0) {

                // Create diff
                self.differences[filename].push(new codebrowser.model.Diff(previousContent, currentContent));

                syncCalls = 0;
            }
        }

        this.each(function(snapshot, index) {

            for (var i = 0; i < snapshot.get('files').length; i++) {

                // New snapshot file, reset sync calls
                syncCalls = 0;

                self.file = snapshot.get('files').at(i);

                var previousSnapshot = self.at(index - 1);

                if (!previousSnapshot) {
                    self.previousFile = self.file;
                } else {
                    self.previousFile = previousSnapshot.get('files').at(i);
                }

                if (!self.previousFile) {
                    self.previousFile = self.file;
                }

                /* jshint loopfunc: true */

                // Fetch previous file only if the models are not the same
                if (self.previousFile !== self.file) {

                    self.previousFile.fetchContent(function(content, error) {

                        if (error) {
                            throw new Error('Failed file fetch.');
                        }

                        previousContent = content;

                        fileSynced(this.get('name'));

                    }.bind(self.previousFile));
                }

                // Fetch current file
                self.file.fetchContent(function(content, error) {

                    if (error) {
                        throw new Error('Failed file fetch.');
                    }

                    currentContent = content;

                    // If both models are the same, current model is a new file, set empty content to previous
                    if (self.previousFile === self.file) {

                        previousContent = '';

                        fileSynced(this.get('name'));
                    }

                    fileSynced(this.get('name'));

                }.bind(self.file));

                /* jshint loopfunc: false */

            }

        });

        return this.differences;
    }
});
