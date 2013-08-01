casper.test.begin('Students view', 11, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load
        this.waitForSelector('#students-container', function () {

            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('td', 4, 'has exactly four students listed');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses\">student_423') !== -1, 'has a student with link to course list');
        });
    });

    casper.then(function () {

        this.clickLabel('student_423', 'a');

        this.echo('\nstudent_423\n-----------');

        this.waitForSelector('#courses-container', function () {
            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises">ohpe</a>') !== -1,
                                                     'course "ohpe" has a correct link to exercise list');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_480', 'a');

        this.echo('\nstudent_480\n-----------');

        this.waitForSelector('#courses-container', function () {
            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses/1/exercises">ohpe</a>') !== -1,
                                                     'course "ohpe" has a correct link to exercise list');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_13', 'a');

        this.echo('\nstudent_13\n----------');

        this.waitForSelector('#courses-container', function () {
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_1312', 'a');

        this.echo('\nstudent_1312\n------------');

        this.waitForSelector('#courses-container', function () {
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
