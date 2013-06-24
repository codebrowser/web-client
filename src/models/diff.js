codebrowser.model.Diff = function (previousContent, content) {

    var differences = [];

    var from = difflib.stringAsLines(previousContent);
    var to = difflib.stringAsLines(content);

    // Create diff
    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    // Diff operations
    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    console.log(operations);

    // Offset by added lines
    var offset = 0;

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        console.log(operation[0]);
        console.log('------------');
        console.log('fromRowStart: ' + operation[1]);
        console.log('fromRowEnd: ' + (operation[2] - 1));
        console.log('');
        console.log('toRowStart: ' + operation[3]);
        console.log('toRowEnd: ' + (operation[4] - 1));
        console.log('------------');

        var difference = {

            type:     operation[0],
            rowStart: operation[3],
            rowEnd:   operation[4] - 1,
            offset: offset

        }

        // Ignore equal
        if (difference.type === 'equal') {
            continue;
        }

        // Replace
        if (difference.type === 'replace') {

            var fromChange = operation[2] - operation[1] - 1;
            var toChange = operation[4] - operation[3] - 1;

            // Replace contains delete-lines
            if (fromChange > toChange) {

                differences.push(difference);
                difference = _.clone(difference);

                operation[1] += (operation[4] - operation[3]);

                difference.type = 'delete';
            }

            // Replace contains insert-lines
            if (toChange > fromChange) {

                differences.push(difference);
                difference = _.clone(difference);

                difference.type = 'insert';
                difference.rowStart += (operation[2] - operation[1]);
            }
        }

        // Delete
        if (difference.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]);
            var deleted = deletedAsLines.join('\n') + '\n';

            difference.rowStart = operation[1];
            difference.rowEnd = operation[2] - 1;

            difference = _.extend(difference, { lines: deleted });
        }

        // Delete increases offset
        if (difference.type === 'delete') {
            offset += difference.rowEnd - difference.rowStart + 1;
        }

        differences.push(difference);
    }

    this.getDifferences = function () {

        return differences;
    }
}
