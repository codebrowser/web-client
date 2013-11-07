casper.test.begin('Courses view (all courses)', 13, function suite(test) {

    casper.start('http://localhost:8000', function() {

        casper.evaluate(createFakeServer, {
            'courses': [
                {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
                {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
            ],

            'students': [],

            'studentgroups': []
        });
    });

    casper.then(function() {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/courses$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');

        test.assertTextExists('Courses (2)', 'has title "Courses (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

        test.assertTextExists('course 1', 'has a course named "course 1"');
        test.assertTextExists('course 2', 'has a course named "course 2"');

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

        this.echo('Searching courses with string "rse 1"');

        test.assertSelectorHasText('tbody tr td a', 'rse 1', 'has course name in second cell of first row in courses table');

        this.sendKeys('#courses-container input', 'rse 1');

        test.assertVisible('tbody tr:first-child', 'has "course 1" row visible');
        test.assertNotVisible('tbody tr:last-child', 'has "course 2" row invisible');

    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Courses view (student courses)', 10, function suite(test) {

    casper.start('http://localhost:8000', function() {

        casper.evaluate(createFakeServer, {
            'courses': [
                {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
                {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5},
                {id: 13, name: 'course 3', exercises: [{}, {}, {}, {}], amountOfStudents: 6},
                {id: 14, name: 'course ¤', exercises: [{}, {}, {}, {}], amountOfStudents: 7}
            ],

            'students': [
                { id: 21, name: 'student 1', courses: [{}, {}]},
                { id: 22, name: 'student 2', courses: [{}, {}, {}]},
                { id: 23, name: 'student 3', courses: [{}, {}, {}, {}]}
            ],

            'students/22':
                { id: 22, name: 'student 2', courses: [{}, {}, {}]},

            'students/22/courses': [
                {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
                {id: 13, name: 'course 3', exercises: [{}, {}, {}, {}], amountOfStudents: 6},
                {id: 14, name: 'course 4', exercises: [{}, {}, {}, {}], amountOfStudents: 7}
            ],

            'studentgroups': []
        });
    });

    casper.then(function() {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.echo('Navigating to course list for "student 2"');
        this.clickLabel('student 2', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/students/22/courses$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
        test.assertTextExists('student 2 —  Courses (3)', 'has title "student 2 —  Courses (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 courses listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/11/exercises">course 1') !== -1,
                                                 'has "course 1" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/13/exercises">course 3') !== -1,
                                                 'has "course 3" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/14/exercises">course 4') !== -1,
                                                 'has "course 4" with a correct link to exercise list');

        function cntEx1() { return $('tr:contains(course 1)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntEx1, '2', 'has exercise count 2 for "course 1"');

        function cntEx3() { return $('tr:contains(course 3)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntEx3, '4', 'has exercise count 4 for "course 3"');

        function cntEx4() { return $('tr:contains(course 4)').find(':nth-child(3)').html(); }
        test.assertEvalEquals(cntEx4, '4', 'has exercise count 4 for "course 4"');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
