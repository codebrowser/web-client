describe('Editor settings view', function () {

    var settingsView = new codebrowser.view.EditorSettingsView({ parentView: new codebrowser.view.EditorView() });

    it('has correct ID', function () {

        expect(settingsView.id).toEqual('editor-settings-container');
    });

    it('has correct template', function () {

        expect(settingsView.template).toBe(Handlebars.templates.EditorSettingsContainer);
    });
});
