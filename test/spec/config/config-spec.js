describe('Config', function () {

    var editor = ace.edit(document.createElement('div'));

    it('should have correct storage key for Editor ignore empty lines setting', function () {

        expect(config.storage.setting.editor.ignoreEmptyLines).toBe('codebrowser.setting.editor.ignoreEmptyLines');
    });

    it('should have correct storage key for Editor theme setting', function () {

        expect(config.storage.setting.editor.theme).toBe('codebrowser.setting.editor.theme');
    });

    it('should have correct storage key for Editor font-size setting', function () {

        expect(config.storage.setting.editor.fontSize).toBe('codebrowser.setting.editor.fontSize');
    });

    it('should have correct storage key for SnapshotView browser state', function () {

        expect(config.storage.view.SnapshotView.browser).toBe('codebrowser.view.SnapshotView.browser');
    });

    it('should have correct storage key for EditorView split state', function () {

        expect(config.storage.view.EditorView.split).toBe('codebrowser.view.EditorView.split');
    });

    it('should have correct storage key for EditorView diff state', function () {

        expect(config.storage.view.EditorView.diff).toBe('codebrowser.view.EditorView.diff');
    });

    it('should have correct url root for main API', function () {

        expect(config.api.main.root).toBe('http://t-avihavai.users.cs.helsinki.fi/cb-back/app/');
    });

    it('should have correct expiration for cache', function () {

        expect(config.cache.expires).toBe(3600);
    });

    it('should have correct ID for view container', function () {

        expect(config.view.container).toBe('#container');
    });

    it('should set editor as read-only', function () {

        spyOn(editor, 'setReadOnly');

        config.editor.configure(editor);
        expect(editor.setReadOnly).toHaveBeenCalledWith(true);
    });

    it('should disable print margin column for editor', function () {

        spyOn(editor, 'setPrintMarginColumn');

        config.editor.configure(editor);
        expect(editor.setPrintMarginColumn).toHaveBeenCalledWith(false);
    });

    it('should disable indent guides for editor', function () {

        spyOn(editor, 'setDisplayIndentGuides');

        config.editor.configure(editor);
        expect(editor.setDisplayIndentGuides).toHaveBeenCalledWith(false);
    });

    it('should set fold style as mark begin and end for editor', function () {

        spyOn(editor.getSession(), 'setFoldStyle');

        config.editor.configure(editor);
        expect(editor.getSession().setFoldStyle).toHaveBeenCalledWith('markbeginend');
    });

    it('should use Light theme as default for editor', function () {

        localStorage.setItem(config.storage.setting.editor.theme, '');

        spyOn(editor, 'setTheme');

        config.editor.configure(editor);
        expect(editor.setTheme).toHaveBeenCalledWith('ace/theme/light');
    });

    it('should use user set theme for editor', function () {

        localStorage.setItem(config.storage.setting.editor.theme, 'ace/theme/dark');

        spyOn(editor, 'setTheme');

        config.editor.configure(editor);
        expect(editor.setTheme).toHaveBeenCalledWith('ace/theme/dark');
    });

    it('should use 12px as default font size for editor', function () {

        localStorage.setItem(config.storage.setting.editor.fontSize, '');

        spyOn(editor, 'setFontSize');

        config.editor.configure(editor);
        expect(editor.setFontSize).toHaveBeenCalledWith(12);
    });

    it('should use user set font size for editor', function () {

        localStorage.setItem(config.storage.setting.editor.fontSize, 14);

        spyOn(editor, 'setFontSize');

        config.editor.configure(editor);
        expect(editor.setFontSize).toHaveBeenCalledWith(14);
    });

    it('should set tab size to 4 spaces for editor', function () {

        spyOn(editor.getSession(), 'setTabSize');

        config.editor.configure(editor);
        expect(editor.getSession().setTabSize).toHaveBeenCalledWith(4);
    });

    it('should set wrap mode for editor', function () {

        spyOn(editor.getSession(), 'setUseWrapMode');

        config.editor.configure(editor);
        expect(editor.getSession().setUseWrapMode).toHaveBeenCalledWith(true);
    });

    it('should set wrap limit range to 120 for editor', function () {

        spyOn(editor.getSession(), 'setWrapLimitRange');

        config.editor.configure(editor);
        expect(editor.getSession().setWrapLimitRange).toHaveBeenCalledWith(120, 120);
    });
});
