codebrowser.model.Diff = function (previousContent, content) {

    var statistics = {

        'replace': 0,
        'insert': 0,
        'delete': 0

    }

    var differences = [];

    var from = difflib.stringAsLines(previousContent);
    var to = difflib.stringAsLines(content);

    // Create diff
    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    // Diff operations
    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    // Offsets
    var offset = 0;
    var deleteOffset = 0;

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        var difference = {

            type:     operation[0],
            rowStart: operation[3],
            rowEnd:   operation[4] - 1,
            offset:   offset

        }

        // Ignore equal
        if (difference.type === 'equal') {
            continue;
        }

        // Replace
        if (difference.type === 'replace') {

            var originalDifference = _.clone(difference);

            var fromChange = operation[2] - operation[1] - 1;
            var toChange = operation[4] - operation[3] - 1;

            // Delta
            var lines = difference.rowEnd - difference.rowStart + 1;
            var changed = operation[2] - operation[1];
            var delta = lines - changed;

            // Replace contains deleted lines
            if (fromChange > toChange) {

                // Replace
                if (difference.rowEnd - difference.rowStart !== 0) {
                    difference.rowEnd -= (changed > delta ? changed : delta);
                }

                differences.push(difference);

                // Statistics
                statistics[difference.type] += difference.rowEnd - difference.rowStart + 1;

                // Delete
                difference = originalDifference;

                difference.type = 'delete';

                // Move index
                operation[1] += lines;
            }

            // Replace contains inserted lines
            if (toChange > fromChange) {

                // Replace
                difference.rowEnd -= (changed > delta ? changed : delta);
                differences.push(difference);

                // Statistics
                statistics[difference.type] += difference.rowEnd - difference.rowStart + 1;

                // Insert
                difference = originalDifference;

                difference.type = 'insert';
                difference.rowStart += changed;
            }
        }

        // Insert increases delete offset
        if (difference.type === 'insert') {
            deleteOffset += difference.rowEnd - difference.rowStart + 1;
        }

        // Delete
        if (difference.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]);
            var deleted = deletedAsLines.join('\n') + '\n';

            difference.rowStart = operation[1] + deleteOffset;
            difference.rowEnd = operation[2] - 1 + deleteOffset;

            difference = _.extend(difference, { fromRowStart: operation[1],
                                                fromRowEnd: operation[2] - 1,
                                                lines: deleted });

            // Delete increases offsets
            var increase = difference.rowEnd - difference.rowStart + 1;

            offset += increase;
            deleteOffset += increase;
        }

        // Statistics
        statistics[difference.type] += difference.rowEnd - difference.rowStart + 1;

        differences.push(difference);
    }

    this.getDifferences = function () {

        return differences;
    }

    this.getStatistics = function () {

        return statistics;
    }
}
