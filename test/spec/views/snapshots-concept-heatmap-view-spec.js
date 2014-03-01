describe('Snapshots concept heatmap view', function () {

    var snapshotsConceptsView = new codebrowser.view.SnapshotsConceptHeatmapView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotsConceptsView.id).toEqual('snapshots-concept-heatmap-container');
    });

});
