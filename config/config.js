/* exported config */

/* Configuration */

var config = {

    apiRoot: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/'

}

config.editor = {

    initialize: function(editor) {

        editor.setTheme('ace/theme/github');
        editor.getSession().setMode('ace/mode/java');
        editor.getSession().setTabSize(4);
        editor.setReadOnly(true);
        editor.setFontSize(14);
        editor.setDisplayIndentGuides(false);
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setWrapLimitRange(120, 120); // line length
        editor.setPrintMarginColumn(120);
    }

}