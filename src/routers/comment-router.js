codebrowser.router.CommentRouter = Backbone.Router.extend({

    routes: {

        'comments(/)':  'comments'

    },

    /* Initialise */

    initialize: function () {

        this.commentsView = new codebrowser.view.CommentsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    comments: function () {

        var self = this;

        var commentCollection = new codebrowser.collection.CommentCollection();

        // Render after comments have been fetched
        var fetched = _.after(1, function () {

            self.commentsView.collection = commentCollection;
            self.commentsView.render();

            codebrowser.controller.ViewController.push(self.commentsView);
        });

        commentCollection.fetch({

            cache: false,
            expires: 0,

            success: function () {
                fetched();
            },

            error: function () {
                self.notFound();
            }
        });
    }
});
