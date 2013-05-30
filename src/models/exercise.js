/* 
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('course').urlRoot + '/' + this.get('course').id + '/exercises';
    }
});
