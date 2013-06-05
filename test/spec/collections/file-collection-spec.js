describe('FileCollection', function () {

    var files;

    beforeEach(function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        files = new codebrowser.collection.FileCollection();

        files.snapshot = snapshot;
    });

    it('should have correct model', function () {

        expect(files.model).toBe(codebrowser.model.File);
    });

    it('should have correct URL', function () {

        expect(files.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files');
    });
});
