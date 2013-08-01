casper.test.begin('Snapshot view', 3, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.clickLabel('student_423', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('ohpe', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.clickLabel('Viikko4_077.Lyyrakortti', 'a');

        this.waitForSelector('#snapshot-navigation-container', function () {

            console.log(this.getHTML());

            test.assertSelectorHasText('#snapshot-navigation-container .span1', '1 / 32', 'first snapshot');
            test.assertSelectorHasText('#editor-top-container header h1', 'Paaohjelma.java', 'correct file name');
            test.assertTruthy(this.getHTML().indexOf('class="active"><a href="#/students/2/courses/1/exercises/3/snapshots/5/files/6">') !== -1,
                                                     'first snapshot file is active');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
