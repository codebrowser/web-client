/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ id: 1 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing a studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { studentId: 1, courseId: 2 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        /* Fetch exercises related to a course */
        if (this.course) {
            return this.course.url() + '/exercises';
        }

        if (!this.studentId && this.courseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/exercises';
        }

        /* Fetch exercises related to a student and course */
        if (!this.studentId || !this.courseId) {
            throw new Error('Options studentId and courseId are required to fetch exercises.');
        }

        return config.api.main.root + 'students/' + this.studentId + '/courses/' + this.courseId + '/exercises';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
        }
    }
});
