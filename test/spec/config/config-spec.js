describe('Config', function () {

    it('should have correct storage key for SnapshotView files state', function () {

        expect(config.storage.view.SnapshotView.files).toBe('codebrowser.view.SnapshotView.files');
    });

    it('should have correct storage key for EditorView split state', function () {

        expect(config.storage.view.EditorView.split).toBe('codebrowser.view.EditorView.split');
    });

    it('should have correct storage key for EditorView diff state', function () {

        expect(config.storage.view.EditorView.diff).toBe('codebrowser.view.EditorView.diff');
    });

    it('should have correct url root for main API', function () {

        expect(config.api.main.root).toBe('http://t-avihavai.users.cs.helsinki.fi/cb-back/app/');
    });

    it('should have correct expiration for cache', function () {

        expect(config.cache.expires).toBe(3600);
    });

    it('should have correct ID for view container', function () {

        expect(config.view.container).toBe('#container');
    });
});
