describe('CommentCollection', function () {

    it('should have correct model', function () {

        var comments = new codebrowser.collection.CommentCollection();

        expect(comments.model).toBe(codebrowser.model.Comment);
    });

    it('should have correct URL', function () {

        var comments = new codebrowser.collection.CommentCollection();

        expect(comments.url()).toBe(config.api.main.root + 'comments?page=0&size=10');
    });

    it('should have correct URL when page given', function () {

        var comments = new codebrowser.collection.CommentCollection({}, {page: 3});

        expect(comments.url()).toBe(config.api.main.root + 'comments?page=3&size=10');
    });

    it('should have correct URL when given studentId, courseId, snapshotId and exerciseId', function () {

        var comments = new codebrowser.collection.CommentCollection({}, {studentId: 1, courseId: 2, exerciseId: 3, snapshotId: 4});

        expect(comments.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/comments?page=0&size=10');
    });

    it('should have correct URL when given studentId, courseId, snapshotId, exerciseId and page', function () {

        var comments = new codebrowser.collection.CommentCollection({}, {studentId: 1, courseId: 2, exerciseId: 3, snapshotId: 4, page: 5});

        expect(comments.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/comments?page=5&size=10');
    });
});
