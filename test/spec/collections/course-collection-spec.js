describe('CourseCollection', function () {

    var courses;

    beforeEach(function () {

        courses = new codebrowser.collection.CourseCollection();
    });

    it('should have correct model', function () {

        expect(courses.model).toBe(codebrowser.model.Course);
    });

    it('should have correct URL when fetching courses related to a student', function () {

        courses = new codebrowser.collection.CourseCollection(null, { studentId: 1 });

        expect(courses.url()).toBe(config.api.main.root + 'students/1/courses');
    });

    it('should have correct URL when fetching all courses', function () {

        expect(courses.url()).toBe(config.api.main.root + 'courses');
    });
});
