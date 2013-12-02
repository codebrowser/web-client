describe('CommentRouter router', function () {

    beforeEach(function () {

        createFakeServer({

            'comments': [],
            'comments?page=0' : []
        });

        Backbone.history.stop();
    });

    it('calls allComments for URL "comments"', function () {

        spyOn(codebrowser.router.CommentRouter.prototype, 'allComments');

        var router = new codebrowser.router.CommentRouter();

        Backbone.history.start();
        router.navigate('#/comments', true);

        expect(codebrowser.router.CommentRouter.prototype.allComments).toHaveBeenCalledWith();
    });


    it('calls paginatedComments for URL "comments?page=0"', function () {

        spyOn(codebrowser.router.CommentRouter.prototype, 'paginatedComments');

        var router = new codebrowser.router.CommentRouter();

        Backbone.history.start();
        router.navigate('#/comments?page=0', true);

        expect(codebrowser.router.CommentRouter.prototype.paginatedComments).toHaveBeenCalledWith('0');
    });

});
