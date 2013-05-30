codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.model.Course',
            collectionType: 'codebrowser.collection.CourseCollection'
        }
    ]
});
