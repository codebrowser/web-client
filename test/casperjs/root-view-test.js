casper.test.begin('Root view', 4, function suite(test) {

    mockData = {

        'studentgroups': [],

        'foo': []
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        test.assertTitle('Code Browser', 'has a correct title');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/studentgroups">') !== -1, 'has a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses">') !== -1, 'has a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/tagnames">') !== -1, 'has a correct link to tag list');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});