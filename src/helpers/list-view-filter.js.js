codebrowser.helper.ListViewFilter = {
    
    // selector for elements to filter
    'rowSelector': 'tbody tr',
    
    // selector inside single element
    'rowSearchTargetCellSelector': 'td:eq(1) a',

    // where to find search input string
    'searchInputSelector': 'input[data-id="query-string"]',

    // container element (usually backbone view $el)
    '$el': null,
    
    
    filterList: function () {
        var rowSelector = this.rowSelector;
        var rowSearchTargetCellSelector = this.rowSearchTargetCellSelector;

        var query  = this._getQueryString();

        var $tableRows = this.$el.find(rowSelector);

        // first show all and clean highlights
        $tableRows.each(function() {
            $(this).show();
            $(this).find(rowSearchTargetCellSelector).html( $(this).find(rowSearchTargetCellSelector).text() );
        });


        if (query !== '') {

            var that = this;

            $tableRows.each(function() {

                var $nameCell = $(this).find(rowSearchTargetCellSelector);

                if ( that._nodeTextContains($nameCell, query) ) {
                    that._highlightMatch($nameCell, query);
                } else {
                    $nameCell.text( $nameCell.text() );
                    $(this).hide();
                }

            });

        }
    },

    _getQueryString: function () {

        return this.$el.find(this.searchInputSelector).val().trim();
    },

    _nodeTextContains: function ($node, query) {

        return $node.text().indexOf(query) !== -1;
    },

    _highlightMatch: function ($node, query) {
        // wrap matched part of nodes text in span

        var text = $node.text();
        var i = text.indexOf(query);
        var l = query.length;

        var highlighted = text.substring(0, i) + '<span class="search-highlight">' + query + '</span>' + text.substring(i+l);

        $node.html( highlighted );
    }
};