describe('Snapshot browser view', function () {

    var snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotBrowserView.id).toEqual('snapshot-browser-container');
    });
});
