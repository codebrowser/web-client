describe('Select router', function () {

	beforeEach(function () {

        Backbone.history.stop();
    });

    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'notFound');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/-9999/');

        waits(2000);

        runs(function () {
            expect(codebrowser.router.ExerciseRouter.prototype.notFound).toHaveBeenCalled();
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