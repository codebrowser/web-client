describe('Snapshot router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls snapshot function with existing URL', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'snapshot');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/students/336/courses/1/exercises/3/snapshots/364', true);

        expect(codebrowser.router.SnapshotRouter.prototype.snapshot).toHaveBeenCalled();
    });

    it('navigates to snapshots with correct IDs', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'navigation');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3/students/1', true);

        expect(codebrowser.router.SnapshotRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('catches an non-existent URL', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'notFound');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/students/-9999/courses/3/exercises/1/snapshots');

        waits(200);

        runs(function () {
            expect(codebrowser.router.SnapshotRouter.prototype.notFound).toHaveBeenCalled();
        });
    });
});
