codebrowser.model.Diff = function (previousContent, content) {

    /* Lines */

    var count = {

        replace:  0,
        insert:   0,
        'delete': 0,

        total: function () {

            return this.replace + this.insert + this['delete'];
        }
    }

    /* Differences */

    var differences = {

        insert:   [],
        replace:  [],
        'delete': [],
        all: []

    }

    /* Initialise */

    var from = difflib.stringAsLines(previousContent);
    var to = difflib.stringAsLines(content);

    // Create diff
    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    // Diff operations
    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    // Offset
    var offset = 0;

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        var difference = {

            type:      operation[0],
            rowStart:  operation[3],
            rowEnd:    operation[4] - 1,
            offset:    offset,
            overwrite: false

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

            // Replaced something to nothing
            if (to.slice(operation[3], operation[4]).join('').length === 0 &&
               (operation[2] - operation[1]) === 1) {

                // Should overwrite previous line
                difference.overwrite = true;

                difference.type = 'delete';
            }

            // Replaced nothing to something
            if (from.slice(operation[1], operation[2]).join('').length === 0 &&
               (operation[4] - operation[3]) === 1) {

                difference.type = 'insert';
            }

            // Replace contains deleted lines
            if (fromChange > toChange) {

                differences.replace.push(difference);
                differences.all.push(difference);

                // Increase replaced lines
                count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                // Delete
                difference = originalDifference;

                difference.type = 'delete';

                // Move index
                operation[1] += lines;
                operation[3] += lines;
            }

            // Replace contains inserted lines
            if (toChange > fromChange) {

                // Replace
                difference.rowEnd = difference.rowStart + changed - 1;

                differences.replace.push(difference);
                differences.all.push(difference);

                // Increase replaced lines
                count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                var insertRowStart = difference.rowEnd + 1;

                // Insert
                difference = originalDifference;

                difference.type = 'insert';

                // Insert should start from where replace ended
                difference.rowStart = insertRowStart;
            }
        }

        // Delete
        if (difference.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]);
            var deleted = deletedAsLines.join('\n');

            // Add line ending if we don't overwrite
            if (!difference.overwrite) {
                deleted += '\n';
            }

            difference.rowStart = operation[3];
            difference.rowEnd = difference.rowStart + (operation[2] - operation[1] - 1);

            difference = _.extend(difference, { fromRowStart: operation[1],
                                                fromRowEnd: operation[2] - 1,
                                                lines: deleted });

            // Delete increases offsets if we don't overwrite
            if (!difference.overwrite) {

                var increase = difference.rowEnd - difference.rowStart + 1;
                offset += increase;
            }
        }

        // Increase lines
        count[difference.type] += difference.rowEnd - difference.rowStart + 1;

        differences[difference.type].push(difference);
        differences.all.push(difference);
    }

    this.getCount = function () {

        return count;
    }

    this.getDifferences = function () {

        return differences;
    }
}
