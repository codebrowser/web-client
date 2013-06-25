describe('TimeDifference', function () {

    it('should return time difference in seconds', function () {

        expect(codebrowser.helper.TimeDifference.calculate(1360332833591, 1360332812583)).toBe('21 seconds');
    });

    it('should return time difference in minutes', function () {

        expect(codebrowser.helper.TimeDifference.calculate(1360333509006, 1360332833591)).toBe('11 minutes');
    });
    
    it('should return time difference in minutes', function () {

        expect(codebrowser.helper.TimeDifference.calculate(20000000, 6000000)).toBe('4 hours');
    });
    
    it('should return time difference in days', function () {

        expect(codebrowser.helper.TimeDifference.calculate(1360329948801, 1359642309317)).toBe('8 days');
    });
    
    it('should return time difference expressed in singular form (1 second/minute/hour/day)', function () {

        expect(codebrowser.helper.TimeDifference.calculate(1360339600659, 1360339599653)).toBe('1 second');
    });
});
