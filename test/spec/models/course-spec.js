describe('Course', function () {

    var course;

    beforeEach(function () {

        course = codebrowser.model.Course.findOrCreate({ id: 1 });
    });

    it('should have correct URL root', function () {

        expect(course.urlRoot).toBe(config.api.main.root + 'courses');
    });

    it('should have correct URL', function () {

        expect(course.url()).toBe(config.api.main.root + 'courses/1');
    });

    it('should have exercises', function () {

        expect(course.getRelation('exercises')).not.toBeNull();
    });

    it('should have HasMany relation with exercises', function () {

        expect(course.getRelation('exercises').options.type).toBe(Backbone.HasMany);
    });

    it('should have correct key for exercises relation', function () {

        expect(course.getRelation('exercises').options.key).toBe('exercises');
    });

    it('should have correct related model for exercises relation', function () {

        expect(course.getRelation('exercises').options.relatedModel).toBe('codebrowser.model.Exercise');
    });

    it('should have correct collection type for exercises relation', function () {

        expect(course.getRelation('exercises').options.collectionType).toBe('codebrowser.collection.ExerciseCollection');
    });

    it('should have correct key in reverse relation for exercises relation', function () {

        expect(course.getRelation('exercises').options.reverseRelation.key).toBe('course');
    });
});
