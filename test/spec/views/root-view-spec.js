describe('Root view', function () {

    var rootView = new codebrowser.view.RootView();

    it('should have correct id', function () {

        expect(rootView.id).toEqual('root-container');
    });

    it('should have correct template', function () {

        expect(rootView.template).toBe(Handlebars.templates.RootContainer);
    });
});
