describe('Select router', function () {

	beforeEach(function () {

        createFakeServer({
            'courses/-9999': 404
        });

        Backbone.history.stop();
    });

    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.SelectRouter.prototype, 'notFound');

        var router = new codebrowser.router.SelectRouter();

        Backbone.history.start();
        router.navigate('#/courses/-9999/');

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.SelectRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

	it('navigates to course view mode selection with correct URL', function () {

        spyOn(codebrowser.router.SelectRouter.prototype, 'navigateToCourse');

        var router = new codebrowser.router.SelectRouter();

        Backbone.history.start();
        router.navigate('#/courses/1', true);

        expect(codebrowser.router.SelectRouter.prototype.navigateToCourse).toHaveBeenCalled();
    });

    it('calls select function with existing URL', function () {

        spyOn(codebrowser.router.SelectRouter.prototype, 'select');

        var router = new codebrowser.router.SelectRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/select/', true);

        expect(codebrowser.router.SelectRouter.prototype.select).toHaveBeenCalled();
    });

});