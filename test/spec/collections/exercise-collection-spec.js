describe('ExerciseCollection', function () {

    var missingOptionsError = 'Option courseId is required to fetch exercises.';
    var exercises;

    it('should have correct model', function () {

        exercises = new codebrowser.collection.ExerciseCollection();

        expect(exercises.model).toBe(codebrowser.model.Exercise);
    });

    it('url should throw error if no courseId is passed', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { studentId: 1 });

        expect(function () { exercises.url() }).toThrow(missingOptionsError);
    });

    it('should have correct URL when fetching all exercises related to a course', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { courseId: 2 });

        expect(exercises.url()).toBe(config.api.main.root + 'courses/2/exercises');
    });

    it('should have correct URL when fetching all exercises related to a student and course', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { studentId: 1, courseId: 2 });

        expect(exercises.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises');
    });
});
