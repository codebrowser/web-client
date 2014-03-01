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
            'tagcategories': 404,
            'tagcategories/-55': 404,
            'tagcategories/-55/tagnames/snapshots': 404,
            'tagcategories/-55/tagnames/exercises': 404,
            'tagcategories/-55/tagnames/unused': 404,
            'tagcategories/1/tagnames': 404,

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

    it('calls listcategories() for URL "tagcategories"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'listcategories');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagcategories', true);

        expect(codebrowser.router.TagRouter.prototype.listcategories).toHaveBeenCalledWith();
    });

    it('calls navigation(id) for URL "tagnames/id"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'navigation');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/7', true);

        expect(codebrowser.router.TagRouter.prototype.navigation).toHaveBeenCalledWith('7');
    });

    it('calls navigateToTagnames(id) for URL "tagcategories/id"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'navigateToTagnames');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagcategories/7', true);

        expect(codebrowser.router.TagRouter.prototype.navigateToTagnames).toHaveBeenCalledWith('7');
    });


    it('calls tags(id) for URL "tagnames/id/tags"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'tags');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagnames/5/tags', true);

        expect(codebrowser.router.TagRouter.prototype.tags).toHaveBeenCalledWith({ tagNameId: '5' });
    });

    it('calls tagsnames(id) for URL "tagcategories/id/tagnames"', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'tagnames');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagcategories/5/tagnames', true);

        expect(codebrowser.router.TagRouter.prototype.tagnames).toHaveBeenCalledWith('5');
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

    it('catches an URL with incorrect tagcategory id', function () {

        spyOn(codebrowser.router.TagRouter.prototype, 'notFound');

        var router = new codebrowser.router.TagRouter();

        Backbone.history.start();
        router.navigate('#/tagcategories/-55/tagnames');

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
