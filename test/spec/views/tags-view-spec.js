describe('Tags view', function () {

    var tagsView = new codebrowser.view.TagsView();

    it('should have correct id', function () {

        expect(tagsView.id).toEqual('tags-container');
    });

    it('should have correct template', function () {

        expect(tagsView.template).toBe(Handlebars.templates.TagsContainer);
    });
});
