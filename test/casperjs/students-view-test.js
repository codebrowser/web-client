// Invalid tests have been commented out until we get the correct test data

/*
casper.test.begin('Students view', 73, function suite(test) {


    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load
        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses">student_2372') !== -1,
                                                     'has "student_2372" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses">student_2580') !== -1,
                                                     'has "student_2580" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1195/courses">student_2869') !== -1,
                                                     'has "student_2869" with a correct link to course list');
        });
    });

    casper.then(function () {

        this.clickLabel('student_2372', 'a');

        this.echo('\nstudent_2372\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/2/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

            test.assertTextExists('mooc-en', 'has a course named "mooc-en"');
            test.assertTextExists('mooc-fi', 'has a course named "mooc-fi"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises">mooc-en</a>') !== -1,
                                                     'course "mooc-en" has a correct link to exercise list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1535/exercises">mooc-fi</a>') !== -1,
                                                     'course "mooc-fi" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-en', 'a');

        this.echo('\nstudent_2372\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/2/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two exercises listed');

            test.assertTextExists('037.PrintingOutText', 'has an exercise named "PrintingOutText"');
            test.assertTextExists('040.PrintingLikeboss', 'has an exercise named "PringtinLikeboss"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises/164/snapshots">037.PrintingOutText') !== -1,
                                                     'has PrintingOutText with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises/197/snapshots">040.PrintingLikeboss') !== -1,
                                                     'has PrintingLikeboss with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_2580', 'a');

        this.echo('\nstudent_2580\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/831/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

            test.assertTextExists('mooc-en', 'has a course named "mooc-en"');
            test.assertTextExists('mooc-fi', 'has a course named "mooc-fi"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1/exercises">mooc-en</a>') !== -1,
                                                     'course "mooc-en" has a correct link to exercise list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1535/exercises">mooc-fi</a>') !== -1,
                                                     'course "mooc-fi" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-fi', 'a');

        this.echo('\nstudent_2580\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/831/courses/1535/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 4, 'has exactly four exercises listed');

            test.assertTextExists('009.Divider', 'has an exercise named "Divider"');
            test.assertTextExists('029.EvenNumbers', 'has an exercise named "EvenNumbers"');
            test.assertTextExists('036.LoopsEndingRemembering', 'has an exercise named "LoopsEndingRemembering"');
            test.assertTextExists('103.Birdwatcher', 'has an exercise named "Birdwatcher"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1535/exercises/3/snapshots">009.Divider') !== -1,
                                                     'has "Divider" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1535/exercises/94/snapshots">029.EvenNumbers') !== -1,
                                                     'has "EvenNumbers" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1535/exercises/114/snapshots">036.LoopsEndingRemembering') !== -1,
                                                     'has "LoopsEndingRemembering" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/831/courses/1535/exercises/310/snapshots">103.Birdwatcher') !== -1,
                                                     'has "Birdwatcher" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_2869', 'a');

        this.echo('\nstudent_2869\n----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/1195/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');
            test.assertTextExists('mooc-en', 'has a course named "mooc-en"');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1195/courses/1/exercises">mooc-en</a>') !== -1,
                                                     'course "mooc-en" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-en', 'a');

        this.echo('\nstudent_2869\'s exercise list\n--------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/1195/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two exercises listed');

            test.assertTextExists('037.PrintingOutText', 'has an exercise named "PrintingOutText"');
            test.assertTextExists('040.PrintingLikeboss', 'has an exercise named "PringtinLikeboss"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1195/courses/1/exercises/164/snapshots">037.PrintingOutText') !== -1,
                                                     'has PrintingOutText with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/1195/courses/1/exercises/197/snapshots">040.PrintingLikeboss') !== -1,
                                                     'has PrintingLikeboss with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function() {

        this.echo('\nsearching students with string "580"\n------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');
            test.assertSelectorHasText('tbody tr td a', 'student_2372', 'has name in seconde cell of first row in students table');

            this.sendKeys('#students-container input', '580');

            test.assertNotVisible('tbody tr:first-child', 'has first row in-visible');
            test.assertVisible('tbody tr:nth-child(2)', 'has second row visible');
            test.assertNotVisible('tbody tr:last-child', 'has last row in-visible');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
*/
