describe('TagNameCollection', function () {

    var tagNames;

    beforeEach(function () {

        tagNames = new codebrowser.collection.TagNameCollection();
    });

    it('should have correct model', function () {

        expect(tagNames.model).toBe(codebrowser.model.TagName);
    });

    it('should have correct URL', function () {

        expect(tagNames.url).toBe(config.api.main.root + 'tagnames');
    });
});
