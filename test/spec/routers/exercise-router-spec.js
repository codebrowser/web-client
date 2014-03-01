describe('Exercise router', function () {

    beforeEach(function () {

        createFakeServer({
            'courses/1': 404,
            'courses/-6666': 404,
            'courses/662': 404,
            'courses/662/exercises': 404,
            'courses/123': 404,
            'courses/123/exercises': 404,
            'students/336': 404,
            'students/336/courses/1/exercises': 404,
            'students/372': 404,
            'students/372/courses/1/exercises': 404,
            'students/-9999': 404,
            'students/-9999/courses/-6666/exercises': 404,
            'students/-6666': 404,
        });

        Backbone.history.stop();
    });

    it('calls exercises function with existing URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'exercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/336/courses/1/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.exercises).toHaveBeenCalled();
    });

    it('navigates to exercises with correct IDs', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigation');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/336/courses/1', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('calls courseExercises function with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'courseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/123/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.courseExercises).toHaveBeenCalled();
    });

    it('navigates to student exercises with correct IDs', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigateToStudentExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/students/372', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigateToStudentExercises).toHaveBeenCalled();
    });

    it('calls studentExercises function with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'studentExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/students/372/exercises/', true);

        expect(codebrowser.router.ExerciseRouter.prototype.studentExercises).toHaveBeenCalled();
    });


    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'notFound');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/-9999/courses/-6666/exercises');

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.ExerciseRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

    it('pushes exercise view to ViewController', function () {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/662/exercises', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
        });
    });
});
