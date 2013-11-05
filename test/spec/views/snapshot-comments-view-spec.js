describe('Snapshot comments view', function () {

    var view = new codebrowser.view.SnapshotCommentsView();

    it('should have correct id', function () {

        expect(view.id).toEqual('snapshot-comments-container');
    });

    it('should have correct template', function () {

        expect(view.template).toBe(Handlebars.templates.SnapshotCommentsContainer);
    });
});
