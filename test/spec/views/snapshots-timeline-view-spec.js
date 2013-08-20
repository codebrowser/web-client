describe('Snapshots timeline view', function () {

    var snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: 'test' });

    it('should have correct id', function () {

        expect(snapshotsTimelineView.id).toEqual('snapshots-timeline-container');
    });

    it('should have correct template', function () {

        expect(snapshotsTimelineView.template.bottomContainer).toBe(Handlebars.templates.SnapshotsTimelineBottomContainer);
    });
});
