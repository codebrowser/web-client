describe('Students view', function () {

    var studentsView = new codebrowser.view.StudentsView();

    it('should have correct id', function () {

        expect(studentsView.id).toEqual('students-container');
    });

    it('should have correct template', function () {

        expect(studentsView.template).toBe(Handlebars.templates.StudentsContainer);
    });
});
