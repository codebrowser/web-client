describe('Root router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.RootRouter.prototype, 'pageNotFound');

        var router = new codebrowser.router.RootRouter();

        Backbone.history.start();
        router.navigate('#/this/url/is/not/legit', true);

        expect(codebrowser.router.RootRouter.prototype.pageNotFound).toHaveBeenCalled();
    });

    it('pushes error view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.RootRouter();

        Backbone.history.start();
        router.navigate('#/this/url/is/not/valid', true);

        expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
    });
});
