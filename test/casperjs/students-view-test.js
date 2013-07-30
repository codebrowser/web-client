casper.test.begin('Students view', 4, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load
        this.waitForSelector('#students-container', function () {

            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('td', 4, 'has four students listed');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses\">student_423') !== -1, 'has a student with link to course list');
        });
    });

    casper.then(function () {

        this.clickLabel('student_423', 'a');
        this.waitForUrl('localhost:8000/#/students/2/courses');
    });

    casper.then(function () {

        test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises">ohpe</a>') !== -1, 'has a course with link to exercise list');
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
