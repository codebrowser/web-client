casper.test.begin('Exercises view (course exercises)', 13, function suite(test) {

    mockData =  {
        'courses': [
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
        ],

        'courses/11':
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},

        'courses/11/exercises': [
            { id: 31, name: 'exc 1'},
            { id: 32, name: 'exc 2'}
        ],

        'courses/12':
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5},

        'courses/12/exercises': [
            { id: 32, name: 'exc 2'},
            { id: 33, name: 'exc 3'},
            { id: 34, name: 'exc 4'}
        ],

        'studentgroups': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('course 1', 'a');
        this.waitForSelector('#select-container');
    });

    casper.then(function() {

        this.clickLabel('View exercises of the course', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list of "course 1"');

        test.assertUrlMatch(new RegExp('/#/courses/11/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('course 1 — Exercises (2)', 'has title "course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/31/students">exc 1') !== -1,
                                                 'has exc 1 with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/32/students">exc 2') !== -1,
                                                 'has exc 2 with a correct link to student list');
    });

    casper.then(function() {

        this.echo('Navigating back to courses list');
        casper.back();
        this.waitForSelector('#select-container');
    });

    casper.then(function() {

        casper.back();
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list of "course 2"');
        this.clickLabel('course 2', 'a');
        this.waitForSelector('#select-container');
    });

    casper.then(function () {

        this.clickLabel('View exercises of the course', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/courses/12/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
        test.assertTextExists('course 2 — Exercises (3)', 'has title "course 2 — Exercises (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/exercises/32/students">exc 2') !== -1,
                                                 'has "exc 2" with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/exercises/33/students">exc 3') !== -1,
                                                 'has "exc 3" with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/exercises/34/students">exc 4') !== -1,
                                                 'has "exc 4" with a correct link to student list');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Exercises view (student-course exercises)', 6, function suite(test) {

    mockData =  {
        'courses/11':
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},

        'students': [
            { id: 21, name: 'student 1', courses: [{}, {}]},
            { id: 22, name: 'student 2', courses: [{}, {}, {}]},
            { id: 23, name: 'student 3', courses: [{}, {}, {}, {}]}
        ],

        'students/21':
            { id: 21, name: 'student 1', courses: [{}, {}]},

        'students/21/courses': [
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
        ],

        'students/21/courses/11/exercises': [
            {id: 31, name: 'exc 1'},
            {id: 32, name: 'exc 2'}
        ],

        'studentgroups': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function() {

        this.clickLabel('student 1', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list for "student 1" and "course 1"');

        test.assertUrlMatch(new RegExp('/#/students/21/courses/11/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('student 1 —  course 1 — Exercises (2)', 'has title "student 1 —  course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/21/courses/11/exercises/31/snapshots">exc 1') !== -1,
                                                 'has "exc 1" with a correct link to snapshots');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/21/courses/11/exercises/32/snapshots">exc 2') !== -1,
                                                 'has "exc 2" with a correct link to snapshots');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Exercises view (course-student exercises)', 6, function suite(test) {

    mockData = {
        'courses': [
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
        ],

        'courses/11':
            {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},

        'courses/11/students': [
            { id: 21, name: 'student 1', courses: [{}]},
            { id: 23, name: 'student 3', courses: [{}, {}]}
        ],

        'students': [
            { id: 21, name: 'student 1', courses: [{}, {}]},
            { id: 22, name: 'student 2', courses: [{}, {}, {}]},
            { id: 23, name: 'student 3', courses: [{}, {}, {}, {}]}
        ],

        'students/23':
            { id: 23, name: 'student 3', courses: [{}, {}]},

        'students/23/courses/11/exercises': [
            {id: 31, name: 'exc 1'},
            {id: 32, name: 'exc 2'}
        ],

        'studentgroups': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('course 1', 'a');
        this.waitForSelector('#select-container');
    });

    casper.then(function() {

        this.clickLabel('View students of the course', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function() {

        this.clickLabel('student 3', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list for "course 1" and "student 3"');

        test.assertUrlMatch(new RegExp('/#/courses/11/students/23/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('student 3 —  course 1 — Exercises (2)', 'has title "student 3 —  course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/students/23/exercises/31/snapshots">exc 1') !== -1,
                                                 'has "exc 1" with a correct link to snapshots');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/students/23/exercises/32/snapshots">exc 2') !== -1,
                                                 'has "exc 2" with a correct link to snapshots');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});
