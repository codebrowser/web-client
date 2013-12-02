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

        var commentCollection;

        commentCollection = new codebrowser.collection.CommentCollection(null, { 'page' : this.page === true ? this.page : page });

        commentCollection.fetch({

            cache: false,
            expires: 0,
            dataType: 'json',

            success: function (data, response) {

                // Get pagination info from Page and add comments as collection
                self.firstPage = response.firstPage;
                self.lastPage = response.lastPage;
                self.totalPages = response.totalPages;
                self.nummberOfElements = response.numberOfElements;
                self.totalElements = response.totalElements;
                commentCollection.reset(response.content);

                // Render after comments have been fetched
                self.commentsView.page = page;
                self.commentsView.collection = commentCollection;
                self.commentsView.firstPage = self.firstPage;
                self.commentsView.lastPage = self.lastPage;
                self.commentsView.totalPages = self.totalPages;
                self.commentsView.numberOfElements = self.numberOfElements;
                self.commentsView.totalElements = self.totalElements;

                codebrowser.controller.ViewController.push(self.commentsView, true);
            },

            error: function () {
                self.notFound();
            }
        });
    }
});
