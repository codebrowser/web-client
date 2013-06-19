codebrowser.model.Diff = function(previousContent, content) {

    var differences = [];

    // Diff
    var from = difflib.stringAsLines(previousContent);
    var to = difflib.stringAsLines(content);

    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    // Show markers
    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i];

        var diff = {
            type:     operation[0],
            rowStart: operation[3],
            rowEnd:   operation[4] - 1
        }

        // Delete
        if (diff.type === 'delete') {

            var deletedAsLines = from.slice(operation[1], operation[2]);

            var deleted = deletedAsLines.join('\n');

            diff.rowStart = operation[1];
            diff.rowEnd   = operation[2] - 1;

            diff = _.extend(diff, { data: deleted} );
        }

        differences.push(diff);
    }

    return differences;
}
