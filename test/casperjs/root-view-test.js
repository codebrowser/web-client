casper.test.begin('Root view', 7, function suite(test) {

    mockData = {

        'studentgroups': [],
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        test.assertTitle('Code Browser', 'has a correct title');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students">') !== -1, 'has a correct link to students');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses">') !== -1, 'has a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/comments">') !== -1, 'has a correct link to comments');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/tagnames">') !== -1, 'has a correct link to tag list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/tagcategories">') !== -1, 'has a correct link to tag categories');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/studentgroups">') === -1, 'does not have link to student groups');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Root view (with student groups)', 1, function suite(test) {

    mockData = {

        'studentgroups': [{}],
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/studentgroups">') !== -1, 'has a correct link to studentgroups');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});