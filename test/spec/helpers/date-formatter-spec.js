describe('DateFormatter', function () {

    it('should return time in correct format', function () {

        expect(Handlebars.helpers.date(new Date())).toMatch(/\d{1,2}.\d{1,2}.\d{4} \d{2}.\d{2}/);
    });

    it('should return time in correct precise format', function () {

        expect(Handlebars.helpers.date(new Date(), true)).toMatch(/\d{1,2}.\d{1,2}.\d{4} \d{2}.\d{2}.\d{2}/);
    });
});
