describe('ListViewFilter', function () {

    var subject = new codebrowser.helper.ListViewFilter( {'containerEl' : '#el-1'} );

    beforeEach(function() {
        $('<div id="el-1"><input id="search-el" data-id="query-string" value="" /></div>').appendTo('body');
    });

    afterEach(function() {
        $('#el-1').remove();
    });

    it('should return search query from input field', function() {

        $('#search-el').val('dent_100');

        expect(subject._getQueryString()).toEqual('dent_100');
    });

    it('should return trimmed search query from input field', function() {

        $('#search-el').val('  some-value       ');

        expect(subject._getQueryString()).toEqual('some-value');
    });

    it('should return node text contains', function() {

        var $node = $('<a href="#">abba</a>');

        expect(subject._nodeTextContains($node, 'bba')).toBe(true);
    });

    it('should not return node text contains', function() {

        var $node = $('<a href="#">abba</a>');

        expect(subject._nodeTextContains($node, 'bbba')).toBe(false);
    });

    it('should not return node text contains text in href', function() {

        var $node = $('<a href="abba">acca</a>');

        expect(subject._nodeTextContains($node, 'abba')).toBe(false);
    });

    it('should highlight the matched part inside given node', function() {

        var $node = $('<a href="#">i got needle in my haystack</a>');

        subject._highlightMatch($node, 'needle');

        expect($node.html()).toEqual('i got <span class="search-highlight">needle</span> in my haystack');
    });

    it('should have case insensitive search', function() {

        var $node = $('<a href="abba">Abc Åäö</a>');

        expect(subject._nodeTextContains($node, 'c å')).toBe(true);
    });

    it('should have case insensitive hightlighting', function() {

        var $node = $('<a href="#">ÅÄÖ</a>');

        subject._highlightMatch($node, 'ä');

        expect($node.html()).toEqual('Å<span class="search-highlight">Ä</span>Ö');
    });

    it('should escape html code when highlighting', function() {

        var $node = $('<a href="#"></a>');
        $node.text('<><');

        subject._highlightMatch($node, '>');

        expect($node.html()).toEqual('&lt;<span class="search-highlight">&gt;</span>&lt;');
    });
});