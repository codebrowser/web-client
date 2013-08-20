describe('Editor view', function () {

    var editorView;

    beforeEach(function () {

        editorView = new codebrowser.view.EditorView();
    });

    it('should have correct id', function () {

        expect(editorView.id).toEqual('editor-container');
    });

    it('should have correct template', function () {

        expect(editorView.template.topContainer).toBe(Handlebars.templates.EditorTopContainer);
    });

    it('should have false diff state by default', function () {

        expect(editorView.diff).toBeFalsy();
    });

    it('should have false split state by default', function () {

        expect(editorView.split).toBeFalsy();
    });
});