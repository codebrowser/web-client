codebrowser.router.TagRouter = Backbone.Router.extend({

    routes: {

        'tagnames(/)':                                                  'tagnames',
        'tagnames/:tagNameId(/)':                                       'navigation',
        'tagnames/:tagNameId/tags(/)':                                  'tagsForTagName',
        'tagcategories(/)':                                             'listcategories',
        'tagcategories/:tagCategoryId(/)':                              'navigateToTagnames',
        'tagcategories/:tagCategoryId/tagnames(/)':                     'tagnames',
        'tagcategories/:tagCategoryId/tagnames/:tagNameId/tags(/)':     'tagsForCategory'

    },

    /* Initialise */

    initialize: function () {

        this.tagNamesView = new codebrowser.view.TagNamesView();
        this.tagsView = new codebrowser.view.TagsView();
        this.tagCategoriesView = new codebrowser.view.TagCategoriesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (tagNameId) {

        codebrowser.app.tag.navigate('#/tagnames/' + tagNameId + '/tags', { replace: true });
    },

    navigateToTagnames: function (tagCategoryId) {

        codebrowser.app.tag.navigate('#/tagcategories/' + tagCategoryId + '/tagnames', { replace: true });
    },

    tagnames: function (tagCategoryId) {

        var self = this;
        var snapshotTagNames;
        var exerciseAnswerTagNames;
        var unusedTagNames;
        var tagCategory;
        var tagCategories;


        if (tagCategoryId) {
            
            snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, onlySnapshotTags : true });

            exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, onlyExerciseAnswerTags : true });

            unusedTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, unusedTags : true });

            tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : tagCategoryId });

        }

        else {

            snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { onlySnapshotTags : true });

            exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { onlyExerciseAnswerTags : true });

            tagCategories = new codebrowser.collection.TagCategoryCollection(null, null);

        }

        // Render after tag name, tags and when needed tag categories and unused tags have been fetched
        var fetchSynced = _.after(5, function () {

            self.tagNamesView.snapshotTagNames = snapshotTagNames;
            self.tagNamesView.exerciseAnswerTagNames = exerciseAnswerTagNames;

            if (tagCategoryId) {
                self.tagNamesView.tagCategory = tagCategory;
                self.tagNamesView.unusedTagNames = unusedTagNames;
            }

            if (tagCategories) {
                self.tagNamesView.tagCategories = tagCategories;
            }

            self.tagNamesView.render();
            codebrowser.controller.ViewController.push(self.tagNamesView);
        });

        // Fetch snapshot tag names
        this._fetchModel(snapshotTagNames, fetchSynced);

        // Fetch tag names for normal tags
        this._fetchModel(exerciseAnswerTagNames, fetchSynced);

        // Fetch tag names that are not yet added to tag category when needed
        // Needed when showing tags inside a certain category
        if (unusedTagNames) {
            this._fetchModel(unusedTagNames, fetchSynced);
        }
        else {
            fetchSynced();
        }

        // Fetch tag category when needed
        // Needed when tags inside a certaon category are shown
        if (tagCategory) {
            tagCategory.fetch();
            fetchSynced();
        }
        else {
            fetchSynced();
        }

        // Fetch all tag categories when needed
        // Needed when all tags are shown
        if (tagCategories) {
            this._fetchModel(tagCategories, fetchSynced);
        }
        else {
            fetchSynced();
        }

    },

    tagsForTagName: function (tagNameId) {
        this.tags({ tagNameId: tagNameId });
    },

    tagsForCategory: function (tagCategoryId, tagNameId) {
        this.tags({ tagNameId: tagNameId, tagCategoryId: tagCategoryId });
    },

    tags: function (options) {

        var self = this;

        var tagName = codebrowser.model.TagName.findOrCreate({ id : options.tagNameId });

        var tagCollection = new codebrowser.collection.TagCollection(null, { tagNameId: options.tagNameId });

        var tagCategory;
        if (options.tagCategoryId) {
            tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : options.tagCategoryId });
        }

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(3, function () {

            self.tagsView.tagName = tagName;
            self.tagsView.collection = tagCollection;

            if (options.tagCategoryId) {
                self.tagsView.tagCategory = tagCategory;
            }

            self.tagsView.render();
            codebrowser.controller.ViewController.push(self.tagsView);
        });

        // Fetch tag name
        this._fetchModel(tagName, fetchSynced);

        // Fetch tags
        this._fetchModel(tagCollection, fetchSynced);

        // Fetch tagCategory if needed
        if (tagCategory) {
            this._fetchModel(tagCategory, fetchSynced);
        }
        else {
            fetchSynced();
        }
    },

    listcategories: function () {

        var self = this;

        var tagCategories = new codebrowser.collection.TagCategoryCollection(null, { onlySnapshotTags : true });

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(1, function () {

            self.tagCategoriesView.collection = tagCategories;
            self.tagCategoriesView.tagCategories = tagCategories;

            self.tagCategoriesView.render();
            codebrowser.controller.ViewController.push(self.tagCategoriesView);
        });

        // Fetch tag names for normal tags
        this._fetchModel(tagCategories, fetchSynced);
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
