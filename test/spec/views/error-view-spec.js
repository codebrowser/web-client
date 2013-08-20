describe('Error view', function () {

    var errorView = new codebrowser.view.ErrorView();

    it('should have correct id', function () {

        expect(errorView.id).toEqual('error-container');
    });

    it('should have correct template', function () {

        expect(errorView.template).toBe(Handlebars.templates.Error);
    });
});
