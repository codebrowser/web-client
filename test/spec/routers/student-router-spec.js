describe('Student router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls exerciseStudents function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'exerciseStudents');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3/students', true);

        expect(codebrowser.router.StudentRouter.prototype.exerciseStudents).toHaveBeenCalled();
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
});
