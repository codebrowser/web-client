casper.test.begin('Courses view', 2, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

        // Wait for the new page to load
        this.waitUntilVisible('body');
    });

    casper.then(function () {

        test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
        test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises\">ohpe') !== -1, 'has a course with link to exercise list');

    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
