describe('CourseCollection', function () {

    var courses;

    beforeEach(function () {

        courses = new codebrowser.collection.CourseCollection();
    });

    it('should have correct model', function () {

        expect(courses.model).toBe(codebrowser.model.Course);
    });

    it('should have correct URL', function () {

        expect(courses.url()).toBe(config.api.main.root + 'courses');
    });
});
