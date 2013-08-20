describe('Snapshot files view', function () {

    var snapshotFilesView = new codebrowser.view.SnapshotFilesView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotFilesView.id).toEqual('snapshot-files-container');
    });

    it('should have correct template', function () {

        expect(snapshotFilesView.template).toBe(Handlebars.templates.SnapshotFilesContainer);
    });
});
