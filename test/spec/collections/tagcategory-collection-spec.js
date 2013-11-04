describe('TagCategoryCollection', function () {

    var categories;

    beforeEach(function () {

        categories = new codebrowser.collection.TagCategoryCollection();
    });

    it('should have correct model', function () {

        expect(categories.model).toBe(codebrowser.model.TagCategory);
    });

    it('should have correct URL when fetching all categories', function () {

        expect(categories.url()).toBe(config.api.main.root + 'tagcategories');
    });
});
