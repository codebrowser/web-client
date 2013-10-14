casper.test.begin('Courses view', 10, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

            test.assertTextExists('mooc-en', 'has a course named "mooc-en"');
            test.assertTextExists('mooc-fi', 'has a course named "mooc-fi"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/">mooc-en') !== -1,
                                                     'has "mooc-en" with a correct link to course view');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1535/">mooc-fi') !== -1,
                                                     'has "mooc-fi" with a correct link to course view');
        });
    });

    casper.then(function() {

        this.echo('\nsearching courses with string "oc-en"\n------------');

        test.assertSelectorHasText('tbody tr td a', 'mooc-en', 'has course name in second cell of first row in courses table');

        this.sendKeys('#courses-container input', 'oc-en');

        test.assertVisible('tbody tr:first-child', 'has "mooc-en" row visible');
        test.assertNotVisible('tbody tr:last-child', 'has "mooc-fi" row in-visible');

    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
