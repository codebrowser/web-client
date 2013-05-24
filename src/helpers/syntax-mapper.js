codebrowser.helpers.syntaxMapper = {

    mode: {

        'java':'java',
        'js':'javascript',
        'py':'python'
    },

    map: function(key) {

        return codebrowser.helpers.syntaxMapper.mode[key];
    },

    getFiletype: function(fileName) {

        var fileType = fileName.split('.');
        return fileType[fileType.length-1];
    }
}
