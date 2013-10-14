describe('Snapshot router', function () {

    beforeEach(function () {

        createFakeServer({
            'students/336': 404,
            'students/336/courses/1/exercises/3/snapshots': 404,
            'students/1': 404,
            'students/1/courses/1/exercises/3/snapshots': 404,
            'students/-9999': 404,
            'students/-9999/courses/3/exercises/1/snapshots': 404,

            'students/2':
                { id: 2, name: 'student 1', courses: [{}]},

            'students/2/courses/1/exercises/3/snapshots': [
                {
                    id: 5,
                    name: 'ss1',
                    type: 'EVENT',
                    snapshotTime: 1371210876758,
                    files: [{id: 51, name: 'file1.java', filesize: 99}],
                    exercise: { id: 31, name: 'exc 1'},
                    course: {id: 11, name: 'course 1'},
                    tests: [],
                    compiles: true,
                    percentageOfTestsPassing: 66
                }
            ]
        });

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

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.SnapshotRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

    it('catches an non-existent snapshot id', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'notFound');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/students/2/courses/1/exercises/3/snapshots/-9999', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.SnapshotRouter.prototype.notFound).toHaveBeenCalled();
        });
    });

    it('catches an non-existent file id', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'notFound');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/students/2/courses/1/exercises/3/snapshots/5/files/-9999', true);

        waits(config.test.async.waitDuration);

        runs(function () {
            expect(codebrowser.router.SnapshotRouter.prototype.notFound).toHaveBeenCalled();
        });
    });
});
