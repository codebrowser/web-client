describe('Comments view', function () {

    var view = new codebrowser.view.CommentsView();

    it('should have correct id', function () {

        expect(view.id).toEqual('comments-container');
    });

    it('should have correct template', function () {

        expect(view.template).toBe(Handlebars.templates.CommentsContainer);
    });
});
