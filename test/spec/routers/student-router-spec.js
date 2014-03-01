describe('Student router', function () {

    beforeEach(function () {

        createFakeServer({
            'courses/1': 404,
            'courses/1/exercises/3/students': 404,
            'courses/3': 404,
            'students': [],
            'courses/662': 404,
            'courses/3/exercises/-6666/students': 404,
            'courses/662/exercises/815/students': 404,
        });

        Backbone.history.stop();
    });

    it('calls exerciseStudents function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'exerciseStudents');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3/students', true);

        expect(codebrowser.router.StudentRouter.prototype.exerciseStudents).toHaveBeenCalled();
    });

    it('calls courseStudents function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'courseStudents');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/students/', true);

        expect(codebrowser.router.StudentRouter.prototype.courseStudents).toHaveBeenCalled();
    });


    it('calls student function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'students');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/students', true);

        expect(codebrowser.router.StudentRouter.prototype.students).toHaveBeenCalled();
    });

    it('navigates to students list with correct IDs', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'navigation');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3', true);

        expect(codebrowser.router.StudentRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('catches an URL with incorrect course id', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'notFound');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/3/exercises/-6666/students');

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.StudentRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

    it('pushes error view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/3/exercises/-6666/students', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
        });
    });

    it('pushes student view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/662/exercises/815/students', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
        });
    });
});
