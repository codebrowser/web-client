codebrowser.router.TagRouter = Backbone.Router.extend({

    routes: {

        'tagnames(/)':                     'tagnames',
        'tagnames/:tagNameId(/)':          'navigation',
        'tagnames/:tagNameId/tags(/)':     'tags',

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

        var tagNameCollection = new codebrowser.collection.TagNameCollection();

        this.tagNamesView.collection = tagNameCollection;

        // Fetch tag name collection
        tagNameCollection.fetch({

            cache: false,
            expires: 0,

            success: function () {
                self.tagNamesView.render();
                codebrowser.controller.ViewController.push(self.tagNamesView);
            },

            // Tag names fetch failed
            error: function () {

                self.notFound();
            }
        });
    },

    navigation: function (tagNameId) {

        codebrowser.app.exercise.navigate('#/tagnames/' + tagNameId + '/tags/', { replace: true });
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
        tagName.fetch({

            cache: false,
            expires: 0,

            success: function () {
                fetchSynced();
            },

            error: function () {
                self.notFound();
            }
        });

         // Fetch tags
        tagCollection.fetch({

            cache: false,
            expires: 0,

            success: function () {
                fetchSynced();
            },

            error: function () {
                self.notFound();
            }
        });
    }
});
