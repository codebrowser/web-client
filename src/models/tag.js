/*
 * Fetch a tag by passing a studentId, courseId and exerciseId as options for the model:
 *
 * var tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { studentId: 1, courseId: 2, exerciseId: 3 });
 *
 * Create a new tag the same way:
 *
 * var tag = new codebrowser.model.Tag({ text: 'Tag' }, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.model.Tag = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.attributes.student.id || !this.attributes.course.id || !this.attributes.exercise.id) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a tag.');
        }

        return config.api.main.root +
               'students/' +
               this.attributes.student.id +
               '/courses/' +
               this.attributes.course.id +
               '/exercises/' +
               this.attributes.exercise.id +
               '/tags';
    },

    //initialize: function (attributes, options) {
    //}
});
