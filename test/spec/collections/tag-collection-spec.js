describe('TagCollection', function () {

    var missingOptionsError = 'Options studentId, courseId and exerciseId are required to fetch tags.';
    var tags;

    beforeEach(function () {

        tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
    });

    it('should have correct model', function () {

        expect(tags.model).toBe(codebrowser.model.Tag);
    });

    it('url should throw error if no studentId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { courseId: 2, exerciseId: 3 });

        expect(function () { tags.url() }).toThrow(missingOptionsError);
    });

    it('url should throw error if no courseId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { studentId: 1, exerciseId: 3 });

        expect(function () { tags.url() }).toThrow(missingOptionsError);
    });

    it('url should throw error if no exerciseId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2 });

        expect(function () { tags.url() }).toThrow(missingOptionsError);
    });

    it('should have correct URL', function () {

        expect(tags.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/tags');
    });
});
