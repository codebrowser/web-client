casper.test.begin('Courses view', 7, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises">ohpe') !== -1,
                                                     'has "ohpe" with a correct link to exercise list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/662/exercises">mooc-ohja') !== -1,
                                                     'has "mooc-ohja" with a correct link to exercise list');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
