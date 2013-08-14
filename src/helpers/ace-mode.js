codebrowser.helper.AceMode = {

    mode: {

        'c':    'c_cpp',
        'css':  'css',
        'h':    'c_cpp',
        'htm':  'html',
        'html': 'html',
        'java': 'java',
        'js':   'javascript',
        'json': 'json',
        'rb':   'ruby',
        'xml':  'xml',
        'yml':  'yaml'

    },

    getModeForFilename: function (filename) {

        // Fallback to text
        var mode = 'text';

        // Can determine filename extension
        if (filename.indexOf('.') !== -1 && filename.indexOf('.') !== 0) {

            var split = filename.split('.');
            var filenameExtension = split[split.length - 1];

            // Set mode or fallback to text if no mode is specified for the filename extension
            mode = this.mode[filenameExtension] || mode;
        }

        return 'ace/mode/' + mode;
    }
}
