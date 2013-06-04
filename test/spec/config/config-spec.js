describe('Config', function () {

    it('should have correct url root for main API', function () {

        expect(config.api.main.root).toBe('http://t-avihavai.users.cs.helsinki.fi/cb-back/app/');
    });

    it('should have correct ID for view container', function () {

        expect(config.view.container).toBe('#container');
    });
});
