casper.test.begin('Root view', 4, function suite(test) {

    casper.start('http://localhost:8000', function() {

        test.assertTitle('Code Browser', 'has a correct title');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students">') !== -1, 'has a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses">') !== -1, 'has a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/tagnames">') !== -1, 'has a correct link to tag list');

    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});

casper.test.begin('Courses view', 8, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');

            test.assertTextExists('mooc-en', 'has a course named "mooc-en"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/">mooc-en') !== -1,
                                                     'has "mooc-en" with a correct link to view mode selection');
        });
    });
    
    casper.then(function() {

        this.echo('\nsearching courses with string "-oh"\n------------');

        test.assertSelectorHasText('tbody tr td a', 'mooc-en', 'has course name in second cell of first row in courses table');

        this.sendKeys('#courses-container input', 'mooc-');

        test.assertVisible('tbody tr:first-child', 'has "mooc-en" row visible');

        this.sendKeys('#courses-container input', 'randomsearchstring');

        test.assertNotVisible('tbody tr:first-child', 'doesn\'t have "mooc-en" row visible when searching with random string');

    });

    casper.run(function() {

        test.done();
        this.echo('\n');

    });
});

