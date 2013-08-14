describe('Filename', function () {

    it('should return correct filename for file path', function () {

        expect(Handlebars.helpers.filename('/path/to/String.java')).toBe('String.java');
    });
});
