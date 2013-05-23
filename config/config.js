/* exported config */

/* Configuration */

var config = {

    apiRoot: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/'

}

var editor = {};

editor.config = (function() {

    function initialize() {
        var editor = ace.edit('container');
        editor.setTheme('ace/theme/github');
        editor.getSession().setMode('ace/mode/java');
        editor.getSession().setTabSize(4);
        editor.setReadOnly(true);
        editor.setFontSize(14);
        editor.setDisplayIndentGuides(false);

        editor.getSession().setUseWrapMode(true);
        editor.getSession().setWrapLimitRange(120, 120); // line length
        editor.setPrintMarginColumn(120);

        editor.setAnimatedScroll(false); // false by default
        editor.setHighlightActiveLine(true); // true by default
        editor.setHighlightSelectedWord(true); // true by default
        editor.setShowPrintMargin(true); // true by default
        editor.getSession().setUseSoftTabs(false); // false by default
        editor.setShowInvisibles(false); // false by default
        editor.setShowFoldWidgets(true); // true by default
    }

    function setCode(data) {
        ace.edit('container').getSession().setValue(data);
    }

    return {
        initialize: initialize,
        setCode: setCode
    };

})();