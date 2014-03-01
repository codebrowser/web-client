codebrowser.model.StudentGroup = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'studentgroups',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'students',
            relatedModel: 'codebrowser.model.Student',
            collectionType: 'codebrowser.collection.StudentCollection',
        }
    ]
});
