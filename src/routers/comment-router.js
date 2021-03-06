codebrowser.router.CommentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'comments(/)':          'allComments',
        'comments?page=:page':  'paginatedComments',

    },

    /* Initialise */

    initialize: function () {

        this.commentsView = new codebrowser.view.CommentsView();
    },

    /* Actions */

    paginatedComments: function (page) {

        this.comments(page);
    },

    allComments: function() {

        // Show first page
        this.comments(0);
    },

    comments: function (page) {

        var self = this;

        var commentCollection = new codebrowser.collection.CommentCollection(null, { 'page' : page });

        this.fetchModel(commentCollection, false, function (data, response) {

            // add comments as collection
            commentCollection.reset(response.content);

            // Render after comments have been fetched
            self.commentsView.page = page;
            self.commentsView.collection = commentCollection;
            self.commentsView.firstPage = response.firstPage;
            self.commentsView.lastPage = response.lastPage;
            self.commentsView.totalPages = response.totalPages;
            self.commentsView.numberOfElements = response.numberOfElements;
            self.commentsView.totalElements = response.totalElements;
            self.commentsView.query = undefined;

            codebrowser.controller.ViewController.push(self.commentsView, true);
        });
    }
});
