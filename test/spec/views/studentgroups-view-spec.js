describe('Student groupss view', function () {

    var studentGroupsView = new codebrowser.view.StudentGroupsView();

    it('should have correct id', function () {

        expect(studentGroupsView.id).toEqual('studentgroups-container');
    });

    it('should have correct template', function () {

        expect(studentGroupsView.template).toBe(Handlebars.templates.StudentGroupsContainer);
    });
});
