codebrowser.model.Diff = {

    diff: function(previousContent, content) {

        var diffData = [];

        // Diff
        var from = difflib.stringAsLines(previousContent);
        var to = difflib.stringAsLines(content);

        var sequenceMatcher = new difflib.SequenceMatcher(from, to);

        /* jshint camelcase: false */

        var differences = sequenceMatcher.get_opcodes();

        /* jshint camelcase: true */

        // Show markers
        for (var i = 0; i < differences.length; i++) {

            var difference = differences[i];
            var type = difference[0];

            var fromRowStart = difference[1] + offset;
            var fromRowEnd = difference[2] - 1 + offset;

            var toRowStart = difference[3] + offset;
            var toRowEnd = difference[4] - 1 + offset;

            var offset = 0;

            // Insert
            if (type === 'insert') {

                var insert = {
                    type:     'insert',
                    rowStart: toRowStart,
                    rowEnd:   toRowEnd
                }

                diffData.push(insert);
            }

            // Replace
            if (type === 'replace') {

                var replace = {
                    type:     'replace',
                    rowStart: toRowStart,
                    rowEnd:   toRowEnd
                }

                diffData.push(replace);
            }

            // Delete
            if (type === 'delete') {


                var deletedAsLines = from.slice(fromRowStart, fromRowEnd + 1);

                var deleted = deletedAsLines.join('\n');

                var deletion = {
                    type: 'delete',
                    rowStart: fromRowStart,
                    rowEnd:   fromRowEnd,
                    data:     deleted
                }

                diffData.push(deletion);

                offset = fromRowEnd + 1 - fromRowStart;
            }
        }

        return diffData;
    }
}
