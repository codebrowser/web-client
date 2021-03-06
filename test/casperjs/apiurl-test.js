
casper.test.begin('API URL setting', 17, function suite(test) {

    mockData = {
        'tagnames': [],
        'tagcategories': [],
        'comments': [],
        'courses': [
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
        ],

        'studentgroups': [],

        'students': [{id: 0}],
        'students/0': [{id: 0}],
        'students/0/courses': [{id: 0}],
        'students/0/courses/0/exercises': [{id: 0}],
        'students/0/courses/0/exercises/0/concepts': [{id: 0}]

    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.echo('Navigating to courses view');
        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        test.assertElementCount('tbody tr', 2, 'has exactly 2 courses listed');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/">course 1') !== -1,
                                                 'has "course 1" with a correct link to course view');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/">course 2') !== -1,
                                                 'has "course 2" with a correct link to course view');

        function cntEx() { return $('tr:contains(course 2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntEx, '3', 'has exercise count 3 for "course 2"');
        function cntSt() { return $('tr:contains(course 2)').find(':nth-child(4)').html(); }
        test.assertEvalEquals(cntSt, '5', 'has student count 5 for "course 2"');
    });

    casper.then(function() {

        test.assertDoesntExist('#settings-modal', 'settings dialog is not visible');

    });

    casper.then(function() {

        this.echo('Clicking icon to show settings dialog');
        this.click('.icon-wrench');
        this.waitUntilVisible('#settings-modal');
    });

    casper.then(function() {

        test.assertVisible('#settings-modal', 'settings dialog is visible');
        function getValue() { return $('#apiUrl').val(); }
        function getRoot() { return config.api.main.root; }
        test.assertEquals(casper.evaluate(getValue), casper.evaluate(getRoot), 'shows current API URL');

        this.echo('Entering new URL');
        this.sendKeys('#apiUrl', 'http://new.api.url/path/to/');
        test.assertEquals(casper.evaluate(getValue), 'http://new.api.url/path/to/', 'shows new API URL');
    });

    casper.then(function() {

        this.echo('Saving');

        // Fake server will be created again because save causes page reload.
        config.test.casperjs.clearLocalStorage = false;
        mockData = {
            'http://new.api.url/path/to/courses': [
                {id: 12, name: 'course 2b', exercises: [{}, {}], amountOfStudents: 6},
                {id: 13, name: 'course 3', exercises: [{}, {}], amountOfStudents: 7},
                {id: 14, name: 'course 4', exercises: [{}], amountOfStudents: 8}
            ],

            'http://new.api.url/path/to/students': [],

            'http://new.api.url/path/to/studentgroups': [],

            'http://new.api.url/path/to/tagnames': [],
            'http://new.api.url/path/to/tagcategories': [],
            'http://new.api.url/path/to/comments': []
        };

        this.clickLabel('Apply', 'button');
        this.clickLabel('Save', 'button');
        this.waitForSelector('#root-container');
    });

    casper.then(function() {

        config.test.casperjs.clearLocalStorage = true;

        function getRoot() { return config.api.main.root; }
        test.assertEquals(casper.evaluate(getRoot), 'http://new.api.url/path/to/', 'config has new API URL');
        test.assertUrlMatch(new RegExp('http://localhost:8000/$'), 'client has root view URL');
    });

    casper.then(function() {

        this.echo('Navigating to courses view');
        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        test.assertElementCount('tbody tr', 3, 'has exactly 3 courses listed');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/">course 2b') !== -1,
                                                 'has "course 2b" with a correct link to course view');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/13/">course 3') !== -1,
                                                 'has "course 3" with a correct link to course view');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/14/">course 4') !== -1,
                                                 'has "course 4" with a correct link to course view');

        function cntEx() { return $('tr:contains(course 2)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntEx, '2', 'has exercise count 2 for "course 2b"');
        function cntSt() { return $('tr:contains(course 2)').find(':nth-child(4)').html(); }
        test.assertEvalEquals(cntSt, '6', 'has student count 6 for "course 2b"');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
