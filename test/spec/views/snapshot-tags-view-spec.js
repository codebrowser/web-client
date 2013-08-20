describe('Snapshot tags view', function () {

    var snapshotTagsView = new codebrowser.view.SnapshotTagsView();

    it('should have correct id', function () {

        expect(snapshotTagsView.id).toEqual('snapshot-tags-container');
    });

    it('should have correct template', function () {

        expect(snapshotTagsView.template).toBe(Handlebars.templates.SnapshotTagsContainer);
    });
});
