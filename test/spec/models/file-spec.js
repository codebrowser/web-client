describe('File', function () {

    var file;

    beforeEach(function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);
    });

    it('should have correct url root', function () {

        expect(file.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files');
    });

    it('should have correct url', function () {

        expect(file.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files/5');
    });

    it('should fetch content for an existing file', function () {

        var _content = null;
        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 184, courseId: 1, exerciseId: 7, id: 186 });

        snapshot.fetch({

            success: function () {

                snapshot.get('files').at(0).fetchContent(function (content) {

                    _content = content;
                });
            }
        });

        waitsFor(function () {

            return _content !== null;

        }, 'File fetch never succeeded.', 2000);

        runs(function () {

            expect(_content).not.toBeNull();
        });
    });

    it('fetch content for a non-existent file should return an error', function () {

        var _error = null;
        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 184, courseId: 1, exerciseId: 7, id: 186 });

        snapshot.fetch({

            success: function () {

                snapshot.get('files').at(0).id = 0;
                snapshot.get('files').at(0).fetchContent(function (content, error) {

                    _error = error;
                });
            }
        });

        waitsFor(function () {

            return _error !== null;

        }, 'File fetch never succeeded.', 2000);

        runs(function () {

            expect(_error).not.toBeNull();
        });
    });
});
