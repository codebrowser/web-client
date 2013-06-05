describe('ExerciseCollection', function () {

    var exercises;

    beforeEach(function () {

        var course = codebrowser.model.Course.findOrCreate({ id: 1 });
        exercises = new codebrowser.collection.ExerciseCollection();

        exercises.course = course;
    });

    it('should have correct model', function () {

        expect(exercises.model).toBe(codebrowser.model.Exercise);
    });

    it('should have correct URL', function () {

        expect(exercises.url()).toBe(config.api.main.root + 'courses/1/exercises');
    });
});
