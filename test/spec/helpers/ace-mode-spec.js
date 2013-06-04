describe('AceMode', function () {

    it('should return text mode for a file with no extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('git')).toBe('ace/mode/text');
    });

    it('should return text mode for a system file with no extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('.gitignore')).toBe('ace/mode/text');
    });

    it('should return text mode for a system file with known extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('.java')).toBe('ace/mode/text');
    });

    it('should return text mode for an unknown file extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('Lorem.txt')).toBe('ace/mode/text');
    });

    it('should return correct mode for a known file extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.java')).toBe('ace/mode/java');
    });
});
