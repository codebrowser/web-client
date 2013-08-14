describe('Pluralize', function () {

    it('should not pluralize simple words if index is less than 1', function () {

        expect(Handlebars.helpers.pluralize(1, 'word')).toBe('word');
    });

    it('should pluralize simple words if index is higher than 1', function () {

        expect(Handlebars.helpers.pluralize(2, 'word')).toBe('words');
    });
});
