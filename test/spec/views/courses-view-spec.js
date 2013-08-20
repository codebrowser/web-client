describe('Courses view', function () {

    var coursesView = new codebrowser.view.CoursesView();

    it('should have correct id', function () {

        expect(coursesView.id).toEqual('courses-container');
    });

    it('should have correct template', function () {

        expect(coursesView.template).toBe(Handlebars.templates.CoursesContainer);
    });
});
