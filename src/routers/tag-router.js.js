codebrowser.router.TagRouter = Backbone.Router.extend({

    routes: {

        'tags(/)':                     'tags',

    },

    /* Initialise */

    initialize: function () {

        this.tagView = new codebrowser.view.TagsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    tags: function () {

        var self = this;

        var tagCollection = new codebrowser.collection.TagCollection();

        this.tagView.collection = tagCollection;

        // Fetch course collection
        tagCollection.fetch({

            cache: false,
            expires: 0,

            success: function () {
                self.tagView.render();
                codebrowser.controller.ViewController.push(self.tagView);
            },

            // Courses fetch failed
            error: function () {

                self.notFound();
            }
        });
    }
});
