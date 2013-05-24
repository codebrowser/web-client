codebrowser.helpers.syntaxMapper = {

    mode: {
        'java':'java',
        'js':'javascript',
        'py':'python'
    },

    map: function(key) {
        return codebrowser.helpers.syntaxMapper.mode[key];
    }

}
