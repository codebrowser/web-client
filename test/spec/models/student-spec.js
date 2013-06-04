describe('Student', function () {

    var student;

    beforeEach(function () {

        student = codebrowser.model.Student.findOrCreate({ id: 1 });
    });

    it('should have correct url root', function () {

        expect(student.urlRoot).toBe(config.api.main.root + 'students');
    });

    it('should have correct url', function () {

        expect(student.url()).toBe(config.api.main.root + 'students/1');
    });
});
