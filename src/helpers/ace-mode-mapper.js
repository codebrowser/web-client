codebrowser.helper.AceModeMapper = {

    mode: {

        'java':'java',
        'js':'javascript',
        'py':'python'
    },

    getMode: function(fileName) {

        var fileType = fileName.split('.');
        fileType = fileType[fileType.length-1];

        return 'ace/mode/' + this.mode[fileType];
    }
}
