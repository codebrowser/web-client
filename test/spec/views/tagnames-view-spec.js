describe('Tagnames view', function () {

    var tagNamesView = new codebrowser.view.TagNamesView();

    it('should have correct id', function () {

        expect(tagNamesView.id).toEqual('tagnames-container');
    });

    it('should have correct template', function () {

        expect(tagNamesView.template).toBe(Handlebars.templates.TagNamesContainer);
    });
});
