describe('Tag', function () {

    var missingAttributesError = 'Attributes student.id, course.id and exercise.id are required to fetch a tag.';
    var tag;

    beforeEach(function () {

        tag = codebrowser.model.Tag.findOrCreate({ id: 4, student: {id:1}, course: {id:2}, exercise: {id:3} });
    });

    it('should have correct URL root when only student, course and exercise ids are given', function () {

        expect(tag.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/tags');
    });

    it('should have correct URL root when also snapshot id is given', function () {
        var attribs = { id: 4, student: {id:1}, course: {id:2}, exercise: {id:3}, snapshot: {id:4} };
        tag = codebrowser.model.Tag.findOrCreate(attribs);

        expect(tag.urlRoot()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/tags');
    });

    it('fetch should throw error if no studentId is passed', function () {

        var ttt = codebrowser.model.Tag.findOrCreate({ id: 999, course: {id:2}, exercise: {id:3} });

        expect(function () { ttt.fetch() }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no courseId is passed', function () {

        var tag = codebrowser.model.Tag.findOrCreate({ id: 888, student: {id:1}, exercise: {id:3} });

        expect(function () { tag.fetch() }).toThrow(missingAttributesError);
    });

    it('fetch should throw error if no exerciseId is passed', function () {

        var tag = codebrowser.model.Tag.findOrCreate({ id: 777, student: {id:1}, course: {id:2} });

        expect(function () { tag.fetch() }).toThrow(missingAttributesError);
    });

});
