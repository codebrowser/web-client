codebrowser.helper.ListViewFilter = function(options) {

    // default selector for elements to filter
    this.rowSelector = 'tbody tr';

    // default selector inside single element
    this.targetCellSelector = 'td:eq(1) a';

    // default where to find search input string
    this.searchInputSelector = 'input[data-id="query-string"]';

    // default container element selector
    this.containerSelector = 'body';

    if (options) {

        this.rowSelector = options.rowSelector || this.rowSelector;
        this.targetCellSelector = options.targetCellSelector || this.targetCellSelector;
        this.searchInputSelector = options.searchInputSelector || this.searchInputSelector;
        this.containerSelector = options.containerSelector || this.containerSelector;
    }

    this.filterList = function () {

        var query = this._getQueryString();

        var $tableRows = $(this.containerSelector).find(this.rowSelector);

        var that = this;

        // first show all and clean highlights
        $tableRows.each(function() {

            $(this).show();

            var cell =  $(this).find(that.targetCellSelector);
            var cellText = cell.text();

            cell.html( cellText );
        });

        if (query !== '') {

            $tableRows.each(function() {

                var $nameCell = $(this).find(that.targetCellSelector);

                if ( that._nodeTextContains($nameCell, query) ) {

                    that._highlightMatch($nameCell, query);
                } else {

                    $nameCell.text( $nameCell.text() );
                    $(this).hide();
                }
            });
        }
    };

    this._getQueryString = function () {

        return $(this.containerSelector).find(this.searchInputSelector).val().trim();
    };

    this._nodeTextContains = function ($node, query) {

        return $node.text().indexOf(query) !== -1;
    };

    this._highlightMatch = function ($node, query) {
        // wrap matched part of nodes text in span

        var text = $node.text();
        var i = text.indexOf(query);
        var l = query.length;

        var highlighted = text.substring(0, i) + '<span class="search-highlight">' + query + '</span>' + text.substring(i+l);

        $node.html( highlighted );
    };
};
