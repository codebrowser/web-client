describe('Tag Categories view', function () {

    var tagCategoriesView = new codebrowser.view.TagCategoriesView();

    it('should have correct id', function () {

        expect(tagCategoriesView.id).toEqual('tagcategories-container');
    });

    it('should have correct template', function () {

        expect(tagCategoriesView.template).toBe(Handlebars.templates.TagCategoriesContainer);
    });
});
