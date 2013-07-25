casper.test.begin('Students view', 3, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.waitForSelector('#root-container', function () {
            this.clickLabel('Students', 'a');
        });

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#students-container', function () {

            this.echo(this.getHTML());
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('td', 3, 'has three students listed');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/7/courses\">student_1003') !== -1, 'has a student with link to course list');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
