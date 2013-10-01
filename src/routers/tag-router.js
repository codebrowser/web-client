codebrowser.router.TagRouter = Backbone.Router.extend({

    routes: {

        'tagnames(/)':                     'tagnames',
        'tagnames/:tagNameId(/)':          'navigation',
        'tagnames/:tagNameId/tags(/)':     'tags'

    },

    /* Initialise */

    initialize: function () {

        this.tagNamesView = new codebrowser.view.TagNamesView();
        this.tagsView = new codebrowser.view.TagsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    tagnames: function () {

        var self = this;

        var snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { onlySnapshotTags : true });

        var exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { onlyExerciseAnswerTags : true });

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(2, function () {

            self.tagNamesView.snapshotTagNames = snapshotTagNames;
            self.tagNamesView.exerciseAnswerTagNames = exerciseAnswerTagNames;

            self.tagNamesView.render();
            codebrowser.controller.ViewController.push(self.tagNamesView);
        });

        // Fetch snapshot tag names
        this._fetchModel(snapshotTagNames, fetchSynced);

        // Fetch tag names for normal tags
        this._fetchModel(exerciseAnswerTagNames, fetchSynced);
    },

    navigation: function (tagNameId) {

        codebrowser.app.tag.navigate('#/tagnames/' + tagNameId + '/tags', { replace: true });
    },

    tags: function (tagNameId) {

        var self = this;

        var tagName = codebrowser.model.TagName.findOrCreate({ id : tagNameId });

        var tagCollection = new codebrowser.collection.TagCollection(null, { tagNameId: tagNameId });

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(2, function () {

            self.tagsView.tagName = tagName;
            self.tagsView.collection = tagCollection;

            self.tagsView.render();
            codebrowser.controller.ViewController.push(self.tagsView);
        });

        // Fetch tag name
        this._fetchModel(tagName, fetchSynced);

        // Fetch tags
        this._fetchModel(tagCollection, fetchSynced);
    },

    _fetchModel: function (model, onSuccess) {

        var self = this;

        model.fetch({

            cache: false,
            expires: 0,

            success: function () {
                onSuccess();
            },

            error: function () {
                self.notFound();
            }
        });
    }
});
