codebrowser.models.Course = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'courses',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.models.Exercise',
            collectionType: 'codebrowser.collections.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ]
});
