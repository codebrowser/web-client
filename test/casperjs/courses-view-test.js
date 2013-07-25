casper.test.begin('Courses view', 2, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

    });

    casper.then(function() {
        this.waitForUrl(this.getCurrentUrl(), function() {
            test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises\">ohpe') !== -1, 'has a course with link to exercise list');
        }, function() {
            console.log(casper.getHTML());
        }, 5000);
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
