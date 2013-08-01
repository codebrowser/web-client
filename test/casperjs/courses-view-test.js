casper.test.begin('Courses view', 5, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container', function () {

            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertElementCount('td', 2, 'has exactly two courses listed');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises\">ohpe') !== -1, 'has a course with link to exercise list');
            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
