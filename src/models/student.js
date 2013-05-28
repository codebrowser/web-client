codebrowser.models.Student = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.models.Course',
            collectionType: 'codebrowser.collections.CourseCollection'
        }
    ]
});
