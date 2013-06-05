describe('StudentCollection', function () {

    var students;

    beforeEach(function () {

        students = new codebrowser.collection.StudentCollection();
    });

    it('should have correct model', function () {

        expect(students.model).toBe(codebrowser.model.Student);
    });

    it('should have correct URL', function () {

        expect(students.url).toBe(config.api.main.root + 'students');
    });
});
