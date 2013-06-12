describe('File', function () {

    var students = new codebrowser.collection.StudentCollection();
    students.fetch({ async: false });

    var student, course, exercise, snapshots, file;

    beforeEach(function () {

        // Reset store
        Backbone.Relational.store.reset();

        // Get existing IDs
        student = students.at(0);
        course = student.get('courses').at(0);
        exercise = course.get('exercises').at(0);

        // Snapshots
        snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: student.id, courseId: course.id, exerciseId: exercise.id });
        snapshots.fetch({ async: false });
    });

    it('should have correct URL root through a snapshot', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);

        expect(file.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files');
    });

    it('should have correct URL root through a collection of snapshots', function () {

        var snapshot = snapshots.at(0);
        file = snapshot.get('files').at(0);

        expect(file.urlRoot()).toBe(config.api.main.root +
                                    'students/' +
                                    student.id +
                                    '/courses/' +
                                    course.id +
                                    '/exercises/' +
                                    exercise.id +
                                    '/snapshots/' +
                                    snapshot.id + '/files');
    });

    it('should have correct URL', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);

        expect(file.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files/5');
    });

    it('should fetch content for an existing file', function () {

        var _content = null;
        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: student.id,
                                                                 courseId: course.id,
                                                                 exerciseId: exercise.id,
                                                                 id: snapshots.at(0).id });
        snapshot.fetch({ async: false });

        snapshot.get('files').at(0).fetchContent(function (content) {

            _content = content;
        });

        waitsFor(function () {

            return _content !== null;

        }, 'File fetch never succeeded.', config.test.async.timeout);

        runs(function () {

            expect(_content).not.toBeNull();
        });
    });

    it('fetch content for a non-existent file should return an error', function () {

        var _error = null;
        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: student.id,
                                                                 courseId: course.id,
                                                                 exerciseId: exercise.id,
                                                                 id: snapshots.at(0).id });
        snapshot.fetch({ async: false });

        // Change the file ID to something wrong
        snapshot.get('files').at(0).id = 0;
        snapshot.get('files').at(0).fetchContent(function (content, error) {

            _error = error;
        });

        waitsFor(function () {

            return _error !== null;

        }, 'File fetch never succeeded.', config.test.async.timeout);

        runs(function () {

            expect(_error).not.toBeNull();
        });
    });
});
