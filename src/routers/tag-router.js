codebrowser.router.TagRouter = codebrowser.router.BaseRouter.extend({

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

    navigation: function (tagNameId) {

        codebrowser.app.tagRouter.navigate('#/tagnames/' + tagNameId + '/tags', { replace: true });
    },

    navigateToTagnames: function (tagCategoryId) {

        codebrowser.app.tagRouter.navigate('#/tagcategories/' + tagCategoryId + '/tagnames', { replace: true });
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

        } else {

            snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { onlySnapshotTags : true });

            exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { onlyExerciseAnswerTags : true });

            tagCategories = new codebrowser.collection.TagCategoryCollection(null, null);

        }

        // Render after tag name, tags and when needed tag categories and unused tags have been fetched
        var fetchSynced = _.after(5, function () {

            self.tagNamesView.snapshotTagNames = snapshotTagNames;
            self.tagNamesView.exerciseAnswerTagNames = exerciseAnswerTagNames;
            self.tagNamesView.tagCategory = tagCategory;
            self.tagNamesView.unusedTagNames = unusedTagNames;
            self.tagNamesView.tagCategories = tagCategories;

            codebrowser.controller.ViewController.push(self.tagNamesView, true);
        });

        // Fetch snapshot tag names
        this.fetchModel(snapshotTagNames, false, fetchSynced);

        // Fetch tag names for normal tags
        this.fetchModel(exerciseAnswerTagNames, false, fetchSynced);

        // Fetch tag names that are not yet added to tag category when needed
        // Needed when showing tags inside a certain category
        if (unusedTagNames) {
            this.fetchModel(unusedTagNames, false, fetchSynced);
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
            this.fetchModel(tagCategories, false, fetchSynced);
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
            self.tagsView.tagCategory = tagCategory;

            codebrowser.controller.ViewController.push(self.tagsView, true);
        });

        // Fetch tag name
        this.fetchModel(tagName, false, fetchSynced);

        // Fetch tags
        this.fetchModel(tagCollection, false, fetchSynced);

        // Fetch tagCategory if needed
        if (tagCategory) {
            this.fetchModel(tagCategory, false, fetchSynced);
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

            codebrowser.controller.ViewController.push(self.tagCategoriesView, true);
        });

        // Fetch tag names for normal tags
        this.fetchModel(tagCategories, false, fetchSynced);
    },
});
