describe('Snapshots timeline view', function () {

    var snapshotsConceptsView = new codebrowser.view.SnapshotsConceptsView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotsConceptsView.id).toEqual('snapshots-concepts-container');
    });

});
