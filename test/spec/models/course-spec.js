describe('Course', function () {

    var course;

    beforeEach(function () {

        course = codebrowser.model.Course.findOrCreate({ id: 1 });
    });

    it('should have correct url root', function () {

        expect(course.urlRoot).toBe(config.api.main.root + 'courses');
    });

    it('should have correct url', function () {

        expect(course.url()).toBe(config.api.main.root + 'courses/1');
    });
});
