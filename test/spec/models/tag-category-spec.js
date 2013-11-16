describe('TagCategory', function () {

    var tagCategory;

    beforeEach(function () {

        tagCategory = codebrowser.model.TagCategory.findOrCreate({ id: 1 });
    });

    it('should have correct URL root', function () {

        expect(tagCategory.urlRoot).toBe(config.api.main.root + 'tagcategories');
    });

    it('should have correct URL', function () {

        expect(tagCategory.url()).toBe(config.api.main.root + 'tagcategories/1');
    });

});