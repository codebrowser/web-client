describe('Exercises view', function () {

    var exercisesView = new codebrowser.view.ExercisesView();

    it('should have correct id', function () {

        expect(exercisesView.id).toEqual('exercises-container');
    });

    it('should have correct template', function () {

        expect(exercisesView.template).toBe(Handlebars.templates.ExercisesContainer);
    });
});
