describe('AceMode', function () {

    it('should return text mode for a file with no extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('git')).toBe('ace/mode/text');
    });

    it('should return text mode for a system file with no extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('.gitignore')).toBe('ace/mode/text');
    });

    it('should return text mode for a known file extension with an unknown filename', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('.java')).toBe('ace/mode/text');
    });

    it('should return text mode for an unknown file extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('Lorem.txt')).toBe('ace/mode/text');
    });

    it('should return correct mode for a known file extension', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.java')).toBe('ace/mode/java');
    });

    it('should return correct mode for C files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.h')).toBe('ace/mode/c_cpp');
        expect(codebrowser.helper.AceMode.getModeForFilename('String.c')).toBe('ace/mode/c_cpp');
    });

    it('should return correct mode for CSS files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('style.css')).toBe('ace/mode/css');
    });

    it('should return correct mode for HTML files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('index.htm')).toBe('ace/mode/html');
        expect(codebrowser.helper.AceMode.getModeForFilename('index.html')).toBe('ace/mode/html');
    });

    it('should return correct mode for Java files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.java')).toBe('ace/mode/java');
    });

    it('should return correct mode for JS files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.js')).toBe('ace/mode/javascript');
    });

    it('should return correct mode for JSON files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('data.json')).toBe('ace/mode/json');
    });

    it('should return correct mode for Ruby files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('String.rb')).toBe('ace/mode/ruby');
    });

    it('should return correct mode for XML files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('settings.xml')).toBe('ace/mode/xml');
    });

    it('should return correct mode for YAML files', function () {

        expect(codebrowser.helper.AceMode.getModeForFilename('settings.yml')).toBe('ace/mode/yaml');
    });
});
