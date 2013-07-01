/*
 * Fetch all courses:
 *
 * var courses = new codebrowser.collection.CourseCollection();
 *
 * Fetch courses related to a student by passing a studentId as an option for the collection:
 *
 * var courses = new codebrowser.collection.CourseCollection(null, { studentId: 1 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        /* Fetch courses related to a student */
        if (this.studentId) {
            return config.api.main.root + 'students/' + this.studentId + '/courses';
        }

        /* Fetch all courses */
        return config.api.main.root + 'courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
        }
    }
});
