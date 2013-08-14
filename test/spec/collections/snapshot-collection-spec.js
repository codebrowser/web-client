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

    it('should return correct duration between two existing snapshots', function () {

        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 1, snapshotTime: 500 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 2, snapshotTime: 1000 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 3, snapshotTime: 1400 }));

        expect(snapshots.getDuration(1, 0)).toBe(500);
    });

    it('should return correct min duration between snapshots', function () {

        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 1, snapshotTime: 500 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 2, snapshotTime: 1000 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 3, snapshotTime: 1400 }));

        expect(snapshots.getMinDuration()).toBe(400);
    });

    it('should return correct max duration between snapshots', function () {

        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 1, snapshotTime: 500 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 2, snapshotTime: 1000 }));
        snapshots.push(codebrowser.model.Snapshot.findOrCreate({ id: 3, snapshotTime: 1400 }));

        expect(snapshots.getMaxDuration()).toBe(500);
    });

    it('should return null if no difference is found for a snapshot', function () {

        expect(snapshots.getDifference(0, 'Test.java')).toBeNull();
    });

    it('should return correct difference for a snapshot', function () {

        snapshots.differences = [];
        snapshots.differences.push({ 'Test.java': {} });

        expect(snapshots.getDifference(0, 'Test.java')).not.toBeNull();
    });

    it('should return correct differences for snapshots', function () {

        var _differences = null;

        var a = codebrowser.model.Snapshot.findOrCreate({ id: 1 });
        var b = codebrowser.model.Snapshot.findOrCreate({ id: 2 });

        // Files for snapshot a
        var aFileA = codebrowser.model.File.findOrCreate({ id: 1, name: 'FileA.java' });
        var aFileB = codebrowser.model.File.findOrCreate({ id: 2, name: 'FileB.java' });

        aFileA.content = 'File A';
        aFileB.content = 'File B';

        var aFiles = new codebrowser.collection.FileCollection([ aFileA, aFileB ]);

        // Files for snapshot b
        var bFileA = codebrowser.model.File.findOrCreate({ id: 4, name: 'FileA.java' });
        var bFileB = codebrowser.model.File.findOrCreate({ id: 5, name: 'FileB.java' });
        var bFileC = codebrowser.model.File.findOrCreate({ id: 6, name: 'FileC.java' });

        bFileA.content = 'File AA';
        bFileB.content = 'File B';
        bFileC.content = 'File CC';

        var bFiles = new codebrowser.collection.FileCollection([ bFileA, bFileB, bFileC ]);

        a.set('files', aFiles);
        b.set('files', bFiles);

        snapshots.push(a);
        snapshots.push(b);

        snapshots.getDifferences(function (differences) {

            _differences = differences;
        });

        waitsFor(function () {

            return _differences !== null;

        }, 'Getting differences never succeeded.', config.test.async.timeout);

        runs(function () {

            // Differences
            expect(_differences).not.toBeNull();
            expect(_differences.length).toBe(2);

            // Differences for snapshots a
            expect(_differences[0].total).toBe(2);
            expect(_differences[0].lines).toBe(2);

            expect(snapshots.getDifference(0, 'FileA.java')).not.toBeNull();
            expect(snapshots.getDifference(0, 'FileC.java')).toBeNull();

            // Differences for snapshot b
            expect(_differences[1].total).toBe(2);
            expect(_differences[1].lines).toBe(3);

            expect(snapshots.getDifference(1, 'FileA.java')).not.toBeNull();
            expect(snapshots.getDifference(1, 'FileC.java')).not.toBeNull();

            expect(snapshots.differencesDone).toBeTruthy();
        });
    });

    it('should return previously calculated differences', function () {

        var _differences = null;

        snapshots.differences = [];
        snapshots.differencesDone = true;

        snapshots.getDifferences(function (differences) {

            _differences = differences;
        });

        waitsFor(function () {

            return _differences !== null;

        }, 'Getting differences never succeeded.', config.test.async.timeout);

        runs(function () {

            expect(_differences).not.toBeNull();
            expect(_differences).toEqual([]);
        });
    });
});
