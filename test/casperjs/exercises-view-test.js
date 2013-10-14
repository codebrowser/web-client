// Invalid tests have been commented out until we get the correct test data

/*casper.test.begin('Exercises view', 78, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('mooc-en', 'a');
        this.clickLabel('View exercises of the course', 'a');

        // Wait for the new page to load given selector
        this.waitForSelector('#select-container', function() {});
    });

    casper.then(function() {

        this.clickLabel('View exercises of the course', 'a');

        this.waitForSelector('#select-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/select') !== -1, 'select view has correct URL');
            test.assertTextExists('View exercises of the course', 'has view exercises link');
        });
    });

    casper.then(function() {

        this.clickLabel('mooc-ohja', 'a');
 
        // Wait for the new page to load given selector
        this.waitForSelector('#select-container', function() {});
    });

    casper.then(function () {

        this.clickLabel('View exercises of the course', 'a');

        this.echo('\nmooc-en\'s exercise list\n--------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two exercises listed');

            test.assertTextExists('037.PrintingOutText', 'has an exercise named "PrintingOutText"');
            test.assertTextExists('040.PrintingLikeboss', 'has an exercise named "PringtinLikeboss"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/164/students">037.PrintingOutText') !== -1,
                                                     'has PrintingOutText with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/197/students">040.PrintingLikeboss') !== -1,
                                                     'has PrintingLikeboss with a correct link to student list');

            // Go two steps back in browser's history
            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.waitForSelector('#courses-container',function() {
            this.clickLabel('mooc-fi', 'a');
        });

        this.waitForSelector('#select-container', function () {
            this.clickLabel('View exercises of the course', 'a');
        });

    });

    casper.then(function () {

        this.echo('\nmooc-fi\'s exercise list\n-------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1535/exercises/') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 4, 'has exactly four exercises listed');

            test.assertTextExists('009.Divider', 'has an exercise named "Divider"');
            test.assertTextExists('029.EvenNumbers', 'has an exercise named "EvenNumbers"');
            test.assertTextExists('036.LoopsEndingRemembering', 'has an exercise named "LoopsEndingRemembering"');
            test.assertTextExists('103.Birdwatcher', 'has an exercise named "Birdwatcher"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/3/students">009.Divider') !== -1,
                                                     'has "Divider" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/94/students">029.EvenNumber') !== -1,
                                                     'has "EvenNumber" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/114/students">036.LoopsEndingRemembering') !== -1,
                                                     'has "LoopsEndingRemembering" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/310/students">103.Birdwatcher') !== -1,
                                                     'has "Birdwatcher" with a correct link to student list');
        });
    });

    casper.then(function () {

        this.clickLabel('009.Divider', 'a');

        this.echo('\nDivider\'s student list\n--------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1535/exercises/3/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_2372', 'has a student named "student_2372"');
            test.assertTextExists('student_2580', 'has a student named "student_2580"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/3/students/2/snapshots">student_2372') !== -1,
                                                     'has "student_2372" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/3/students/831/snapshots">student_2580') !== -1,
                                                     'has "student_2580" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('029.EvenNumbers', 'a');

        this.echo('\nEvenNumbers\' student list\n-----------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1535/exercises/94/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_2372', 'has a student named "student_2372"');
            test.assertTextExists('student_2580', 'has a student named "student_2580"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/94/students/2/snapshots">student_2372') !== -1,
                                                     'has "student_2372" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/94/students/831/snapshots">student_2580') !== -1,
                                                     'has "student_2580" with a correct link to snapshots');

            casper.back();
            casper.back();
            casper.back();
        });
    });

    casper.then(function() {

        this.clickLabel('k2013-ohpe', 'a');

        this.waitForSelector('#select-container');
    });
    casper.then(function () {

        this.clickLabel('View exercises of the course', 'a');

        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.clickLabel('011.SuurempiLuku', 'a');

        this.echo('\nLoopsEndingRemembering\'s student list\n------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1535/exercises/114/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_2372', 'has a student named "student_2372"');
            test.assertTextExists('student_2580', 'has a student named "student_2580"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/114/students/2/snapshots">student_2372') !== -1,
                                                     'has "student_2372" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/114/students/831/snapshots">student_2580') !== -1,
                                                     'has "student_2580" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('103.Birdwatcher', 'a');

        this.echo('\nirdwatcher\'s student list\n---------------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1535/exercises/310/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_2372', 'has a student named "student_2372"');
            test.assertTextExists('student_2580', 'has a student named "student_2580"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/310/students/2/snapshots">student_2372') !== -1,
                                                     'has "student_2372" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/exercises/310/students/831/snapshots">student_2580') !== -1,
                                                     'has "student_2580" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});*/
