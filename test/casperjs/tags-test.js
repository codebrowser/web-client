casper.test.begin('Tags view', 16, function suite(test) {

    mockData = {
        'comments': [],
        'tagnames': [
            {id: 61, name: 't1', tags: [{}]},
            {id: 62, name: 't2', tags: [{}, {}, {}]},
            {id: 63, name: 't3', tags: [{}, {}]},
            {id: 64, name: 't4', tags: [{}, {}]}
        ],

        'tagnames/exerciseanswers': [
            {id: 61, name: 't1', tags: [{}]},
            {id: 62, name: 't2', tags: [{}, {}, {}]},
        ],

        'tagnames/snapshots': [
            {id: 62, name: 't2', tags: [{}, {}, {}]},
            {id: 63, name: 't3', tags: [{}, {}]},
            {id: 64, name: 't4', tags: [{}, {}]}
        ],

        'tagnames/62':
            {id: 62, name: 't2', tags: [{}, {}, {}]},

        'tagnames/62/tags': [
            {id: 71, course: {id: 11, name: 'c1'}, student: {id: 21, name: 's1'}, exercise: {id: 31, name: 'e1'}, tagName: {id: 62, name: 't2'}},
            {id: 72, course: {id: 11, name: 'c1'}, student: {id: 21, name: 's1'}, exercise: {id: 31, name: 'e1'}, snapshot: {id: 41, name: 'ss1'}, tagName: {id: 62, name: 't2'}},
            {id: 73, course: {id: 12, name: 'c2'}, student: {id: 21, name: 's1'}, exercise: {id: 32, name: 'e2'}, tagName: {id: 62, name: 't2'}}
        ],

        'tagcategories': [
            {id: 61, name: 'c1', tagnames: [{}]},
            {id: 62, name: 'c2', tagnames: [{}, {}, {}]},
            {id: 63, name: 'c3', tagnames: [{}, {}]},
            {id: 64, name: 'c4', tagnames: [{}, {}]}
        ],

        'studentgroups': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Tags', 'a');
        this.waitForSelector('#tagnames-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/tagnames$'), 'has correct URL');

        test.assertTextExists('Tags (2)', 'has title "Tags (2)"');
        test.assertTextExists('Snapshot tags (3)', 'has title "Snapshot tags (3)"');

        test.assertElementCount('.double-list-left tbody tr', 2, 'has exactly 2 exercise tags listed');
        test.assertElementCount('.double-list-right tbody tr', 3, 'has exactly 3 snapshot tags listed');

        test.assertTruthy(this.getHTML('.double-list-left').indexOf('<a href="./#/tagnames/61/tags">t1') !== -1,
                'has "t1" in exercise tags with a correct link to tag list');
        test.assertTruthy(this.getHTML('.double-list-right').indexOf('<a href="./#/tagnames/63/tags">t3') !== -1,
                'has "t3" in snapshot tags with a correct link to tag list');

        function cntTg1() { return $('tbody tr tr:contains(t1)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTg1, '1', 'has tag count 1 for "t1"');

        function cntTg2() { return $('tbody tr tr:contains(t2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTg2, '3', 'has tag count 3 for "t2"');

        function cntTg3() { return $('tbody tr tr:contains(t3)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTg3, '2', 'has tag count 2 for "t3"');

    });

    casper.then(function() {

        this.echo('Navigating to tag list for "t2"');
        this.clickLabel('t2', 'a');
        this.waitForSelector('#tags-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/tagnames/62/tags$'), 'has correct URL');
        test.assertTextExists('Tags — t2 (3)', 'Tags  title "Tags — t2 (3)"');
        test.assertElementCount('tbody tr', 3, 'has exactly 3 tags listed');

        var html = '<a href="./#/students/21/courses/11/exercises/31"><i class="icon-answer icon-gray icon-intext"></i> c1 / e1';
        test.assertTruthy(this.getHTML().indexOf(html) !== -1, 'has exercise tag for course "c1", exercise "e1" with correct link');
        html = '<a href="./#/students/21/courses/11/exercises/31/snapshots/41"><i class="icon-snapshot icon-gray icon-intext"></i> c1 / e1 (Snapshot)';
        test.assertTruthy(this.getHTML().indexOf(html) !== -1, 'has snapshot tag for course "c1", exercise "e1" with correct link');
        html = '<a href="./#/students/21/courses/12/exercises/32"><i class="icon-answer icon-gray icon-intext"></i> c2 / e2';
        test.assertTruthy(this.getHTML().indexOf(html) !== -1, 'has exercise tag for course "c2", exercise "e2" with correct link');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
