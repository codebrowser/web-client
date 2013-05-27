codebrowser.models.Course = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (this.get('student')) {
            return this.get('student').urlRoot + '/' + this.get('student').id + '/courses';
        }

        return config.apiRoot + 'courses';
    },

    relations: [{

        type: Backbone.HasMany,
        key: 'exercises',
        relatedModel: 'codebrowser.models.Exercise',
        collectionType: 'codebrowser.collections.ExerciseCollection',
//        autoFetch: true,
        reverseRelation: {

            key: 'course'

        }
    }]
});
