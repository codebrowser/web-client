describe('StudentGroupCollection', function () {

    it('should have correct model', function () {

        var studentGroups = new codebrowser.collection.StudentGroupCollection();

        expect(studentGroups.model).toBe(codebrowser.model.StudentGroup);
    });

    it('should have correct URL', function () {

        var studentGroups = new codebrowser.collection.StudentGroupCollection();

        expect(studentGroups.url()).toBe(config.api.main.root + 'studentgroups');
    });
});
