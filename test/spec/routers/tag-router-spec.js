describe('TagRouter router', function () {

    beforeEach(function () {

        createFakeServer({

            'tagnames/snapshots': [],
            'tagnames/exerciseanswers': [],
            'tagnames/5': 404,
            'tagnames/5/tags': 404,
            'tagnames/-55': 404,
            'tagnames/-55/tags': 404,
            'tagnames/4': 404,
            'tagnames/4/tags': 404,
        });

        Backbone.history.stop();
    });

    it('calls tagnames() for URL "tagnames"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'tagnames');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames', true);

        expect(codebrowser.router.TagRouter.prototype.tagnames).toHaveBeenCalledWith();
    });

    it('calls navigation(id) for URL "tagnames/id"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'navigation');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/7', true);

        expect(codebrowser.router.TagRouter.prototype.navigation).toHaveBeenCalledWith('7');
    });

    it('calls tags(id) for URL "tagnames/id/tags"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'tags');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/5/tags', true);

        expect(codebrowser.router.TagRouter.prototype.tags).toHaveBeenCalledWith('5');
    });

    it('catches an URL with incorrect tagname id', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'notFound');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/-55/tags');

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.TagRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

    it('pushes student view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/4/tags', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
        });
    });
});
