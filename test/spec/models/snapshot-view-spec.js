describe('Snapshot view', function () {

    it('has a non-empty snapshot collection', function () {

        codebrowser.app.snapshot.navigate('#/students/2/courses/1/exercises/3/snapshots/19');

        expect(codebrowser.app.snapshot.snapshotView).not.toBe(null);
    });

});
