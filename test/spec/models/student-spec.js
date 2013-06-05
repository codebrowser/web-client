describe('Student', function () {

    var student;

    beforeEach(function () {

        student = codebrowser.model.Student.findOrCreate({ id: 1 });
    });

    it('should have correct URL root', function () {

        expect(student.urlRoot).toBe(config.api.main.root + 'students');
    });

    it('should have correct URL', function () {

        expect(student.url()).toBe(config.api.main.root + 'students/1');
    });

    it('should have courses', function () {

        expect(student.getRelation('courses')).not.toBeNull();
    });

    it('should have HasMany relation with courses', function () {

        expect(student.getRelation('courses').options.type).toBe(Backbone.HasMany);
    });

    it('should have correct key for courses relation', function () {

        expect(student.getRelation('courses').options.key).toBe('courses');
    });

    it('should have correct related model for courses relation', function () {

        expect(student.getRelation('courses').options.relatedModel).toBe('codebrowser.model.Course');
    });

    it('should have correct collection type for courses relation', function () {

        expect(student.getRelation('courses').options.collectionType).toBe('codebrowser.collection.CourseCollection');
    });
});
