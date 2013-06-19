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

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        var diff = {

            type:     operation[0],
            rowStart: operation[3],
            rowEnd:   operation[4] - 1

        }

        // Ignore equal
        if (diff.type === 'equal') {
            continue;
        }

        // Delete
        if (diff.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]);
            var deleted = deletedAsLines.join('\n') + '\n';

            diff.rowStart = operation[1];
            diff.rowEnd = operation[2] - 1;

            diff = _.extend(diff, { lines: deleted });
        }

        differences.push(diff);
    }

    this.getDifferences = function () {

        return differences;
    }
}
