describe('CommentCollection', function () {

    it('should have correct model', function () {

        var comments = new codebrowser.collection.CommentCollection();

        expect(comments.model).toBe(codebrowser.model.Comment);
    });

    it('should have correct URL', function () {

        var comments = new codebrowser.collection.CommentCollection();

        expect(comments.url()).toBe(config.api.main.root + 'comments');
    });

    it('should have correct URL when given studentId, modelId and exerciseId', function () {

        var comments = new codebrowser.collection.CommentCollection({}, {studentId: 1, courseId: 2, exerciseId: 3});

        expect(comments.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/comments');
    });
});
