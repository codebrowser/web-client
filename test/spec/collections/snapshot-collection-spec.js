describe('SnapshotCollection', function () {

    var missingOptionsError = 'Options studentId, courseId and exerciseId are required to fetch snapshots.';
    var snapshots;

    beforeEach(function () {

        snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
    });

    it('should have correct model', function () {

        expect(snapshots.model).toBe(codebrowser.model.Snapshot);
    });

    it('url should throw error if no studentId is passed', function () {

        snapshots = new codebrowser.collection.SnapshotCollection(null, { courseId: 2, exerciseId: 3 });

        expect(function () { snapshots.url() }).toThrow(missingOptionsError);
    });

    it('url should throw error if no courseId is passed', function () {

        snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, exerciseId: 3 });

        expect(function () { snapshots.url() }).toThrow(missingOptionsError);
    });

    it('url should throw error if no exerciseId is passed', function () {

        snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2 });

        expect(function () { snapshots.url() }).toThrow(missingOptionsError);
    });

    it('should have correct URL', function () {

        expect(snapshots.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots');
    });
});
