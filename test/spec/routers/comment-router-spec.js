describe('CommentRouter router', function () {

    beforeEach(function () {

        createFakeServer({

            'comments/': []
        });

        Backbone.history.stop();
    });

    it('calls comments() for URL "comments"', function () {

        spyOn(codebrowser.router.CommentRouter.prototype, 'comments');

        var router = new codebrowser.router.CommentRouter();

        Backbone.history.start();
        router.navigate('#/comments', true);

        expect(codebrowser.router.CommentRouter.prototype.comments).toHaveBeenCalledWith();
    });

});
