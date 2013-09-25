describe('ListViewFilter', function () {
    
    it('should return search query from input field', function() {
        
        codebrowser.helper.ListViewFilter.$el = $('<div><input data-id="query-string" value="dent_100" /></div>');
        
        expect(codebrowser.helper.ListViewFilter._getQueryString()).toEqual('dent_100');
    });
    
    it('should return trimmed search query from input field', function() {
        
        codebrowser.helper.ListViewFilter.$el = $('<div><input data-id="query-string" value="&nbsp;some-value" /></div>');
        
        expect(codebrowser.helper.ListViewFilter._getQueryString()).toEqual('some-value');
    });
    
    it('should return node text contains', function() {
        
        var $node = $('<a href="#">abba</a>');
        
        expect(codebrowser.helper.ListViewFilter._nodeTextContains($node, 'bba')).toBe(true);
    });
    
    it('should not return node text contains', function() {
        
        var $node = $('<a href="#">abba</a>');
        
        expect(codebrowser.helper.ListViewFilter._nodeTextContains($node, 'bbba')).toBe(false);
    });
    
    it('should not return node text contains text in href', function() {
        
        var $node = $('<a href="abba">acca</a>');
        
        expect(codebrowser.helper.ListViewFilter._nodeTextContains($node, 'abba')).toBe(false);
    });
    
    it('should highlight the matched part inside given node', function() {
        
        var $node = $('<a href="#">i got needle in my haystack</a>');
        
        codebrowser.helper.ListViewFilter._highlightMatch($node, 'needle');
        
        expect($node.html()).toEqual('i got <span class="search-highlight">needle</span> in my haystack');
    });
    
});