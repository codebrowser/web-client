describe('Exercise', function () {

    var exercise;

    beforeEach(function () {

        var course = codebrowser.model.Course.findOrCreate({ id: 1 });
        exercise = codebrowser.model.Exercise.findOrCreate({ id: 2 });

        exercise.set('course', course);
    });

    it('should have correct URL root', function () {

        expect(exercise.urlRoot()).toBe(config.api.main.root + 'courses/1/exercises');
    });

    it('should have correct URL', function () {

        expect(exercise.url()).toBe(config.api.main.root + 'courses/1/exercises/2');
    });
});
