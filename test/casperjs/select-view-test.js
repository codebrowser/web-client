casper.test.begin('Select view', function suite(test) {


    casper.start('http://localhost:8000', function() {

        casper.evaluate(casper.fakeServer, {
            'courses': [
                {id: 11, name: 'course 1', exercises: [{}, {}], amountOfStudents: 4},
                {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
            ],

            'courses/12':
                {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5},

            'students': []
        });
    });

    casper.then(function() {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('course 2', 'a');
        this.waitForSelector('#select-container');
    });

    casper.then(function() {

        test.assertUrlMatch(new RegExp('/#/courses/12/select$'), 'has correct URL');
        test.assertTextExists('course 2 —  Select view mode', 'has title "course 2 —  Select view mode"');

        link = '<a href="./#/courses/12/students">View students of the course';
        test.assertTruthy(this.getHTML().indexOf(link) !== -1, 'has correct link to student list');
        var link = '<a href="./#/courses/12/exercises">View exercises of the course';
        test.assertTruthy(this.getHTML().indexOf(link) !== -1, 'has correct link to exercise list');
    });

    casper.run(function() {

        test.done();
        this.echo('');
    });
});
