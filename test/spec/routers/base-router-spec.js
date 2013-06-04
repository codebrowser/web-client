describe('A base router', function () {

    beforeEach( function () {
        Backbone.history.stop();
    });

    it('catches improper URL', function () {

        spyOn(codebrowser.router.BaseRouter.prototype, 'notFound');
        var router = new codebrowser.router.BaseRouter();
        Backbone.history.start();

        router.navigate('#/this/url/is/not/legit', true);

        expect(codebrowser.router.BaseRouter.prototype.notFound).toHaveBeenCalled();
    });

});
