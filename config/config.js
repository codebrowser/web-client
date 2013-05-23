/* exported config */

/* Configuration */

var config = {

    apiRoot: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/',

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);

            // Text
            editor.setTheme('ace/theme/github');
            editor.setFontSize(12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
