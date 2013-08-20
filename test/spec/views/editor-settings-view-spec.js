describe('Editor settings view', function () {

    var settingsView;
    var editorView;

    beforeEach(function () {

        editorView = jasmine.createSpyObj('editorView', ['configure', 'update']);
        settingsView = new codebrowser.view.EditorSettingsView({ parentView: editorView });
    });

    it('has correct ID', function () {

        expect(settingsView.id).toEqual('editor-settings-container');
    });

    it('has correct template', function () {

        expect(settingsView.template).toBe(Handlebars.templates.EditorSettingsContainer);
    });

    it('re-configures parent view when saving new changes', function () {

        settingsView.save();

        expect(editorView.configure).toHaveBeenCalled();
    });

    it('updates parent view when saving new changes', function () {

        settingsView.save();

        expect(editorView.update).toHaveBeenCalled();
    });
});
