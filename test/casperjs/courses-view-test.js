casper.test.begin('Courses view', 9, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertElementCount('tbody tr', 3, 'has exactly three courses listed');

            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTextExists('k2013-ohpe', 'has a course named "k2013-ohpe"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises">k2013-ohpe') !== -1,
                                                     'has "k2013-ohpe" with a correct link to exercise list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/48561/exercises">ohpe') !== -1,
                                                     'has "ohpe" with a correct link to exercise list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises">mooc-ohja') !== -1,
                                                     'has "mooc-ohja" with a correct link to exercise list');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
