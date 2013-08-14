describe('Index', function () {

    it('should be correct for 0', function () {

        expect(Handlebars.helpers.index(0)).toBe(1);
    });

    it('should be correct for 1', function () {

        expect(Handlebars.helpers.index(1)).toBe(2);
    });
});
