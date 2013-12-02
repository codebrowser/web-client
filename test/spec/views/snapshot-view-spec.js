describe('Snapshot view', function () {

    var snapshotView = new codebrowser.view.SnapshotView();

    it('has a non-empty snapshot collection', function () {

        codebrowser.app.snapshotRouter.navigate('#/students/2/courses/1/exercises/3/snapshots/19');

        expect(codebrowser.app.snapshotRouter.snapshotView.collection).not.toBe(null);
    });

    it('should have correct id', function () {

        expect(snapshotView.id).toEqual('snapshot-container');
    });

    it('should have correct templates', function () {

        expect(snapshotView.template.navigationbarContainer).toBe(Handlebars.templates.NavigationBarContainer);
        expect(snapshotView.template.navigationContainer).toBe(Handlebars.templates.SnapshotNavigationContainer);
    });
});
