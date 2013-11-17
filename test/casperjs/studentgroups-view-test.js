casper.test.begin('Student groups view', 12, function suite(test) {

    mockData = {
        'tagnames': [],
        'tagcategories': [],
        'comments\\?page=0&size=1': [],
        'studentgroups': [
            { id: 101, name: 'group 1', students: [{}, {}]},
            { id: 102, name: 'group 2', students: [{}, {}, {}]},
        ]
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Student groups', 'a');
        this.waitForSelector('#studentgroups-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/studentgroups$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Student groups', 'has "Student groups" label active in the navbar');
        test.assertTextExists('Student groups (2)', 'has title "student groups (2)"');

        test.assertElementCount('tbody tr', 2, 'has exactly 2 student groups listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/studentgroups/101/students">group 1') !== -1,
                                                 'has "group 1" with a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/studentgroups/102/students">group 2') !== -1,
                                                 'has "group 2" with a correct link to course list');

        function cntCrs1() { return $('tr:contains(group 1)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntCrs1, '2', 'has student count 2 for "group 1"');

        function cntCrs2() { return $('tr:contains(group 2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntCrs2, '3', 'has student count 3 for "group 2"');
    });

    casper.then(function() {

        this.echo('Searching student groups with string "up 1"');

        test.assertElementCount('tbody tr', 2, 'has exactly 2 groups listed');
        test.assertSelectorHasText('tbody tr td a', 'group 1', 'has name in second cell of first row in table');

        this.sendKeys('#studentgroups-container input', 'up 1');

        test.assertVisible('tbody tr:nth-child(1)', 'has first row visible');
        test.assertNotVisible('tbody tr:nth-child(2)', 'has second row invisible');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});