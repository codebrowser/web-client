describe('Course router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls courses function', function () {

        spyOn(codebrowser.router.CourseRouter.prototype, 'courses');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/courses', true);

        expect(codebrowser.router.CourseRouter.prototype.courses).toHaveBeenCalled();
    });

    it('navigates from student id to student\'s course listing', function () {

        spyOn(codebrowser.router.CourseRouter.prototype, 'navigation');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/students/1', true);

        expect(codebrowser.router.CourseRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('catches an non-existent student id', function () {

        spyOn(codebrowser.router.CourseRouter.prototype, 'notFound');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/students/-9999/courses');

        waits(200);

        runs(function () {
            expect(codebrowser.router.CourseRouter.prototype.notFound).toHaveBeenCalled();
        });
    });
});
