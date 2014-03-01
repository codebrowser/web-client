describe('Snapshots concept bubbles view', function () {

    var snapshotsConceptsView = new codebrowser.view.SnapshotsConceptBubbleView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotsConceptsView.id).toEqual('snapshots-concept-bubbles-container');
    });

});
