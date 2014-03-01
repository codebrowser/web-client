describe('ConceptCollection', function () {

    var concepts;

    beforeEach(function () {

        var models = [
            new codebrowser.model.Concept({name:'test1', size:2}),
            new codebrowser.model.Concept({name:'test1', size:2}),
            new codebrowser.model.Concept({name:'test1', size:7}),
            new codebrowser.model.Concept({name:'test1', size:1})
        ];

        var options = { studentId: 4, courseId: 3, exerciseId: 2, snapshotId: 1 };

        concepts = new codebrowser.collection.ConceptCollection(models, options);
    });

    it('should have correct model', function () {

        expect(concepts.model).toBe(codebrowser.model.Concept);
    });

    it('should have correct URL', function () {

        expect(concepts.url()).toBe(config.api.main.root + 'students/4/courses/3/exercises/2/snapshots/1/concepts');
    });

    it('should have correct comparator', function () {

        expect(concepts.comparator).toBe('name');
    });

    it('should return correct max size', function () {

        expect(concepts.getMaxSize()).toBe(7);
    });
});