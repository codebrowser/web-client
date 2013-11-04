describe('TagNameCollection', function () {

    var tagNames;

    beforeEach(function () {

        tagNames = new codebrowser.collection.TagNameCollection();
    });

    it('should have correct model', function () {

        expect(tagNames.model).toBe(codebrowser.model.TagName);
    });

    it('should have correct URL', function () {

        expect(tagNames.url()).toBe(config.api.main.root + 'tagnames');
    });

    it('should have correct URL when fetching only snapshot tags', function () {

        tagNames = new codebrowser.collection.TagNameCollection(null, { onlySnapshotTags : true });

        expect(tagNames.url()).toBe(config.api.main.root + 'tagnames/snapshots');
    });

    it('should have correct URL when fetching only exercise answer tags', function () {

        tagNames = new codebrowser.collection.TagNameCollection(null, { onlyExerciseAnswerTags : true });

        expect(tagNames.url()).toBe(config.api.main.root + 'tagnames/exerciseanswers');
    });

    it('should have correct URL when fetching tag categories unused tags', function () {

        tagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId : 1, unusedTags: true });

        expect(tagNames.url()).toBe(config.api.main.root + 'tagcategories/1/tagnames/unused');
    });

    it('should have correct URL when fetching tag categories exercise tags', function () {

        tagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId : 1, onlyExerciseAnswerTags: true });

        expect(tagNames.url()).toBe(config.api.main.root + 'tagcategories/1/tagnames/exercises');
    });

    it('should have correct URL when fetching tag categories snapshot tags', function () {

        tagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId : 1, onlySnapshotTags: true });

        expect(tagNames.url()).toBe(config.api.main.root + 'tagcategories/1/tagnames/snapshots');
    });

});
