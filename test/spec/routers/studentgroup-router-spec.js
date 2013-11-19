describe('Student group router', function () {

    beforeEach(function () {

        createFakeServer({
            'studentgroups': 404,
        });

        Backbone.history.stop();
    });

    it('calls studentGroups function with correct URL', function () {

        spyOn(codebrowser.router.StudentGroupRouter.prototype, 'studentGroups');

        var router = new codebrowser.router.StudentGroupRouter();

        Backbone.history.start();
        router.navigate('#/studentgroups', true);

        expect(codebrowser.router.StudentGroupRouter.prototype.studentGroups).toHaveBeenCalled();
    });
});
