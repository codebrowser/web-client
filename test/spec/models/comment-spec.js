describe('Comment', function () {

    it('should have correct URL root when only student, course and exercise ids are given', function () {

        var comment = codebrowser.model.Comment.findOrCreate({id: 16, student: {id:1}, course: {id:2}, exercise: {id:3}});

        expect(comment.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/comments');
    });

    it('should have correct URL root when also snapshot id is given', function () {

        var comment = codebrowser.model.Comment.findOrCreate({id: 16, student: {id:1}, course: {id:2}, exercise: {id:3}, snapshot: {id:4}});

        expect(comment.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/comments');
    });

});
