describe('Snapshot', function () {

    var students = new codebrowser.collection.StudentCollection();
    students.fetch({ async: false });

    var missingAttributesError = 'Attributes studentId, courseId and exerciseId are required to fetch a snapshot.';
    var snapshot;

    beforeEach(function () {

        // Reset store
        Backbone.Relational.store.reset();

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
    });

    it('should have correct URL root', function () {

        expect(snapshot.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots');
    });

    it('should have correct URL root through a collection of snapshots', function () {

        // Get existing IDs
        var student = students.at(0);
        var course = student.get('courses').at(0);
        var exercise = course.get('exercises').at(0);

        // Snapshots
        var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: student.id, courseId: course.id, exerciseId: exercise.id });
        snapshots.fetch({ async: false });

        // Snapshot
        snapshot = snapshots.at(0);

        expect(snapshot.urlRoot()).toBe(config.api.main.root +
                                        'students/' +
                                        student.id +
                                        '/courses/' +
                                        course.id +
                                        '/exercises/' +
                                        exercise.id +
                                        '/snapshots');
    });

    it('should have correct URL', function () {

        expect(snapshot.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4');
    });

    it('fetch should throw error if no studentId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ courseId: 2, exerciseId: 3, id: 5 });

        expect(function () { snapshot.fetch() }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no courseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, exerciseId: 3, id: 6 });

        expect(function () { snapshot.fetch() }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no exerciseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, id: 7 });

        expect(function () { snapshot.fetch() }).toThrow(missingAttributesError);
    });

    it('should have files', function () {

        expect(snapshot.getRelation('files')).not.toBeNull();
    });

    it('should have HasMany relation with files', function () {

        expect(snapshot.getRelation('files').options.type).toBe(Backbone.HasMany);
    });

    it('should have correct key for files relation', function () {

        expect(snapshot.getRelation('files').options.key).toBe('files');
    });

    it('should have correct related model for files relation', function () {

        expect(snapshot.getRelation('files').options.relatedModel).toBe('codebrowser.model.File');
    });

    it('should have correct collection type for files relation', function () {

        expect(snapshot.getRelation('files').options.collectionType).toBe('codebrowser.collection.FileCollection');
    });

    it('should have correct key in reverse relation for files relation', function () {

        expect(snapshot.getRelation('files').options.reverseRelation.key).toBe('snapshot');
    });

    it('should have course', function () {

        expect(snapshot.getRelation('course')).not.toBeNull();
    });

    it('should have HasOne relation with course', function () {

        expect(snapshot.getRelation('course').options.type).toBe(Backbone.HasOne);
    });

    it('should have correct related model for course relation', function () {

        expect(snapshot.getRelation('course').options.relatedModel).toBe('codebrowser.model.Course');
    });

});
