/*
 *
 */

codebrowser.model.Comment = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.attributes.student || !this.attributes.course || !this.attributes.exercise ||
                !this.attributes.student.id || !this.attributes.course.id || !this.attributes.exercise.id) {
            throw new Error('Attributes student.id, course.id and exercise.id are required to fetch a comment.');
        }

        var path = config.api.main.root +
               'students/' +
               this.attributes.student.id +
               '/courses/' +
               this.attributes.course.id +
               '/exercises/' +
               this.attributes.exercise.id;

        if (this.attributes.snapshot && this.attributes.snapshot.id) {
            path += '/snapshots/' + this.attributes.snapshot.id;
        }

        return path + '/comments';
    },

});
