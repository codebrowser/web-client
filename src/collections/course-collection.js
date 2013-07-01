/*
 * Fetch all courses:
 * var courses = new codebrowser.collection.SnapshotCollection();
 *
 * Fetch courses related to a student by passing a studentId as an option for the collection:
 * var courses = new codebrowser.collection.SnapshotCollection(null, { studentId: 1 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        if (this.studentId) {
            return config.api.main.root + 'students/' + this.studentId + '/courses';
        }

        return config.api.main.root + 'courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
        }
    }
});
