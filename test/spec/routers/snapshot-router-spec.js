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
});
