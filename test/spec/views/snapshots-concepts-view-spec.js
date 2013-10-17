describe('Snapshots concepts view', function () {

    var snapshotConceptsView = new codebrowser.view.SnapshotsConceptsView();

    it('should have correct id', function () {

        expect(snapshotConceptsView.id).toEqual('snapshots-concepts-container');
    });

});