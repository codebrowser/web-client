describe('Select view', function () {

    var selectView = new codebrowser.view.SelectView();

    it('should have correct id', function () {

        expect(selectView.id).toEqual('select-container');
    });

    it('should have correct template', function () {

        expect(selectView.template).toBe(Handlebars.templates.SelectContainer);
    });
});
