codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                     'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                           'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId(/)': 'snapshot',

        'courses/:courseId/students/:studentId/exercises/:exerciseId(/)':                                     'courseNavigation',
        'courses/:courseId/students/:studentId/exercises/:exerciseId/snapshots(/)':                           'courseSnapshot',

        'courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                           'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':               'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId(/)': 'navigation'

    },

    studentId: null,
    exerciseId: null,

    /* Initialise */

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();
            codebrowser.controller.ViewController.push(this.snapshotView);
        }
    },

    /* Actions */

    navigation: function (courseId, exerciseId, studentId, snapshotId, fileId) {

        this.snapshot(studentId, courseId, exerciseId, snapshotId, fileId, { courseRoute: true });
    },

    courseNavigation: function (courseId, exerciseId, studentId) {

        codebrowser.app.snapshotRouter.navigate('#/courses/' +
                                                courseId +
                                                '/students/' +
                                                studentId +
                                                '/exercises/' +
                                                exerciseId +
                                                '/snapshots/', { replace: true });
    },

    courseSnapshot: function (courseId, studentId, exerciseId) {
        this.snapshot(studentId, courseId, exerciseId, null, null, null, { courseRoute: true});
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId, options) {

        var self = this;

        this.setUp();

        var snapshotCollection;

        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            this.snapshotView.collection = snapshotCollection;

            this.studentId = studentId;
            this.exerciseId = exerciseId;

        } else {

            snapshotCollection = this.snapshotView.collection;
        }

        if (options && options.courseRoute) {
            this.snapshotView.courseRoute = true;
        }

        // Wait for fetches to be in sync
        var fetchSynced = _.after(2, function () {
            var snapshot;

            // No snapshot ID specified, navigate to first snapshot
            if (!snapshotId) {

                snapshot = snapshotCollection.at(0);

                self.snapshotView.navigate(snapshot, null, { replace: true });

                return;
            }

            // Snapshot
            snapshot = snapshotCollection.get(snapshotId);

            // Invalid snapshot ID
            if (!snapshot) {

                self.notFound();

                return;
            }

            // No file ID specified, navigate to first file
            if (!fileId) {

                self.snapshotView.navigate(snapshot, null, { replace: true });

                return;
            }

            // Invalid file ID
            if (!snapshot.get('files').get(fileId)) {

                self.notFound();

                return;
            }
            self.snapshotView.update(snapshot, fileId);
        });

        var student = codebrowser.model.Student.findOrCreate({ id: studentId });

        // Fetch student
        this.fetchModel(student, true, function () {

            self.snapshotView.student = student;
            fetchSynced();
        });

        // Fetch snapshot collection
        this.fetchModel(snapshotCollection, true, fetchSynced);
    }
});
