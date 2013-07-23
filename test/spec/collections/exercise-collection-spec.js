describe('ExerciseCollection', function () {

    var missingOptionsError = 'Options studentId and courseId are required to fetch exercises.';
    var exercises;

    beforeEach(function () {

        var course = codebrowser.model.Course.findOrCreate({ id: 1 });
        exercises = new codebrowser.collection.ExerciseCollection();

        exercises.course = course;
    });

    it('should have correct model', function () {

        expect(exercises.model).toBe(codebrowser.model.Exercise);
    });

    it('url should throw error if no courseId is passed', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { studentId: 1 });

        expect(function () { exercises.url() }).toThrow(missingOptionsError);
    });

    it('should have correct URL when fetching all exercises related to a course', function () {

        expect(exercises.url()).toBe(config.api.main.root + 'courses/1/exercises');
    });

    it('should have correct URL when fetching all exercises related to a student and course', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { studentId: 1, courseId: 2 });

        expect(exercises.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises');
    });
});
