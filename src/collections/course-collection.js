codebrowser.collections.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.models.Course,

    url: function () {

        if (this.get('student')) {
            return this.get('student').urlRoot + '/' + this.get('student').id + '/courses';
        }

        return config.apiRoot + 'courses';
    }
});
