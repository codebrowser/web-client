describe('Exercise router', function () {

    beforeEach(function () {

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

    it('navigates to course exercises with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigateToCourseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/1', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigateToCourseExercises).toHaveBeenCalled();
    });
});
