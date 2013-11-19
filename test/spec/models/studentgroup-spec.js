describe('StudentGroup', function () {

    it('should have correct URL', function () {

        var studentGroup = codebrowser.model.StudentGroup.findOrCreate({id: 16});

        expect(studentGroup.url()).toBe(config.api.main.root + 'studentgroups/16');
    });
});
