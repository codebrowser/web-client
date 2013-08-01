casper.test.begin('Root view', 3, function suite(test) {

    casper.start('http://localhost:8000', function() {

        test.assertTitle('Code Browser', 'has a correct title');
        test.assertTruthy(this.getHTML().indexOf('<a href="/#/students\">') !== -1, 'has a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="/#/courses\">') !== -1, 'has a correct link to course list');

    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
