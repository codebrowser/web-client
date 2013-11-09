casper.test.begin('Tag category test', 14, function suite(test) {

    mockData = {
        'tagcategories': [
            {id: 61, name: 'c1', tagnames: [{}]},
            {id: 62, name: 'c2', tagnames: [{}, {}, {}]},
            {id: 63, name: 'c3', tagnames: [{}, {}]},
            {id: 64, name: 'c4', tagnames: [{}, {}]}
        ],

        'tagcategories/62':
            {id: 62, name: 'c2', tagnames: [{}, {}, {}]},

        'tagcategories/62/tagnames/exercises': [
            {id: 71, name: 't1', tags: [{}]},
            {id: 72, name: 't2', tags: [{}, {}, {}]}
        ],

        'tagcategories/62/tagnames/snapshots': [
            {id: 73, name: 't3', tags: [{}, {}]}
        ],

        'tagcategories/62/tagnames/unused': [
            {id: 74, name: 't4', tags: [{}, {}]},
            {id: 75, name: 't5', tags: [{}, {}]},
            {id: 76, name: 't6', tags: [{}, {}]},
        ],

        'tagnames/72':
            {id: 72, name: 't2', tags: [{}, {}, {}]},

        'tagnames/72/tags': [
            {id: 71, course: {id: 11, name: 'c1'}, student: {id: 21, name: 's1'}, exercise: {id: 31, name: 'e1'}, tagName: {id: 62, name: 't2'}},
            {id: 72, course: {id: 11, name: 'c1'}, student: {id: 21, name: 's1'}, exercise: {id: 31, name: 'e1'}, snapshot: {id: 41, name: 'ss1'}, tagName: {id: 62, name: 't2'}},
            {id: 73, course: {id: 12, name: 'c2'}, student: {id: 21, name: 's1'}, exercise: {id: 32, name: 'e2'}, tagName: {id: 62, name: 't2'}}
        ],

        'studentgroups': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Tag categories', 'a');
        this.waitForSelector('#tagcategories-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/tagcategories$'), 'has correct URL');

        test.assertTextExists('Tag categories (4)', 'has title "Tag categories (4)"');
        test.assertElementCount('.table tbody tr', 4, 'has exactly 4 tag categories listed');

        function cntTCg1() { return $('tbody tr:contains(c1)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTCg1, '1', 'has tagname count 1 for "c1"');

        function cntTCg2() { return $('tbody tr:contains(c2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTCg2, '3', 'has tagname count 3 for "c2"');

        function cntTCg3() { return $('tbody tr:contains(c3)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTCg3, '2', 'has tagname count 2 for "c3"');

        function cntTCg4() { return $('tbody tr:contains(c4)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntTCg4, '2', 'has tagname count 2 for "c4"');

    });


    casper.then(function() {

        this.clickLabel('c2', 'a');
        this.waitForSelector('#tagnames-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/tagcategories/62/tagnames$'), 'has correct URL');

        test.assertElementCount('.double-list-left tbody tr', 2, 'has exactly 2 exercise tags listed');
        test.assertElementCount('.double-list-right tbody tr', 1, 'has exactly 1 snapshot tags listed');

        test.assertTruthy(this.getHTML('.double-list-left').indexOf('<a href="./#/tagcategories/62/tagnames/71/tags">t1') !== -1,
                'has "t1" in exercise tags with a correct link to tag list');
        test.assertTruthy(this.getHTML('.double-list-left').indexOf('<a href="./#/tagcategories/62/tagnames/72/tags">t2') !== -1,
                'has "t2" in exercise tags with a correct link to tag list');
        test.assertTruthy(this.getHTML('.double-list-right').indexOf('<a href="./#/tagcategories/62/tagnames/73/tags">t3') !== -1,
                'has "t3" in snapshot tags with a correct link to tag list');

    });

    casper.then(function() {

        this.echo('Navigating to tag list for "t2"');
        this.clickLabel('t2', 'a');
        this.waitForSelector('#tags-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/tagcategories/62/tagnames/72/tags$'), 'has correct URL');

    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
