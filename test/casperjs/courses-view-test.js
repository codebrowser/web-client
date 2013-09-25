casper.test.begin('Courses view', 13, function suite(test) {

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
    
    casper.then(function() {

        this.echo('\nsearching courses with string "-oh"\n------------');

        test.assertSelectorHasText('tbody tr td a', 'k2013-ohpe', 'has course name in second cell of first row in courses table');

        this.sendKeys('#courses-container input', '-oh');

        test.assertVisible('tbody tr:first-child', 'has "k2013-ohpe" row visible');
        test.assertNotVisible('tbody tr:nth-child(2)', 'has "ohpe" row in-visible');
        test.assertVisible('tbody tr:last-child', 'has "mooc-ohja" row visible');

    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
