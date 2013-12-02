codebrowser.router.CommentRouter = Backbone.Router.extend({

    routes: {

        'comments(/)':          'allComments',
        'comments?page=:page':  'paginatedComments',

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

        // Render after comments have been fetched
        var fetched = _.after(1, function () {

            self.commentsView.page = page;
            self.commentsView.collection = commentCollection;
            self.commentsView.firstPage = self.firstPage;
            self.commentsView.lastPage = self.lastPage;
            self.commentsView.totalPages = self.totalPages;
            self.commentsView.numberOfElements = self.numberOfElements;
            self.commentsView.totalElements = self.totalElements;

            self.commentsView.render();

            codebrowser.controller.ViewController.push(self.commentsView);
        });

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

                fetched();
            },

            error: function () {
                self.notFound();
            }
        });
    }
});
