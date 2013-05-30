codebrowser.helper.AceModeMapper = {

    mode: {

        'java': 'java'

    },

    getMode: function (fileName) {

        // Fallback to text
        var mode = 'text';

        // Can determine file extension
        if (fileName.indexOf('.') !== -1 && fileName.indexOf('.') !== 0) {

            var split = fileName.split('.');
            var fileExtension = split[split.length - 1];

            // Set mode or fallback to text if no mode is specified for file extension
            mode = this.mode[fileExtension] || mode;
        }

        return 'ace/mode/' + mode;
    }
}
