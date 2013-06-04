describe('Snapshot', function () {

    var missingAttributesError = 'Attributes studentId, courseId and exerciseId are required to fetch a snapshot.';
    var snapshot;

    beforeEach(function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
    });

    it('should have correct url root', function () {

        expect(snapshot.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots');
    });

    it('should have correct url', function () {

        expect(snapshot.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4');
    });

    it('fetch should throw error if no studentId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ courseId: 2, exerciseId: 3, id: 5 });

        expect(function () { snapshot.fetch(); }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no courseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, exerciseId: 3, id: 6 });

        expect(function () { snapshot.fetch(); }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no exerciseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, id: 7 });

        expect(function () { snapshot.fetch(); }).toThrow(missingAttributesError);
    });
});
