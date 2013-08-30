casper.test.begin('Exercises view', 78, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('k2013-ohpe', 'a');

        this.echo('\nk2013-ohpe\'s exercise list\n--------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 8, 'has exactly eight exercises listed');

            test.assertTextExists('Viikko4_077.Lyyrakortti', 'has an exercise named "Lyyrakortti"');
            test.assertTextExists('Viikko5_086.LyyrakorttiJaKassapaate', 'has an exercise named "LyyrakorttiJaKassapaate"');
            test.assertTextExists('Viikko6_103.Tietokanta', 'has an exercise named "Tietokanta"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/71/students">Viikko4_077.Lyyrakortti') !== -1,
                                                     'has LyyraKortti with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/114/students">Viikko5_086.LyyrakorttiJaKassapaate') !== -1,
                                                     'has LyyraKorttiJaKassapaate with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/368/students">Viikko6_103.Tietokanta') !== -1,
                                                     'has Tietokanta with a correct link to student list');

            // Go one step back in browser's history
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nmooc-ohja\'s exercise list\n-------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49221/students">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has "MuistavaSanakirja" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49372/students">Viikko12_156.Matopeli') !== -1,
                                                     'has "Matopeli" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50122/students">Viikko7_114.Sanakirja') !== -1,
                                                     'has "Sanakirja" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50219/students">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has "UseanKaannoksenSanakirja" with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50244/students">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has "Numerotiedustelu" with a correct link to student list');
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko11_142.MuistavaSanakirja', 'a');

        this.echo('\nMuistavaSanakirja\'s student list\n--------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises/49221/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_13', 'has a student named "student_13"');
            test.assertTextExists('student_1312', 'has a student named "student_1312"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49221/students/49220/snapshots">student_13') !== -1,
                                                     'has "student_13" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49221/students/50489/snapshots">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko12_156.Matopeli', 'a');

        this.echo('\nMatopeli\'s student list\n-----------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises/49372/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_13', 'has a student named "student_13"');
            test.assertTextExists('student_1312', 'has a student named "student_1312"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49372/students/49220/snapshots">student_13') !== -1,
                                                     'has "student_13" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/49372/students/50489/snapshots">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko7_114.Sanakirja', 'a');

        this.echo('\nSanakirja\'s student list\n------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises/50122/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_13', 'has a student named "student_13"');
            test.assertTextExists('student_1312', 'has a student named "student_1312"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50122/students/49220/snapshots">student_13') !== -1,
                                                     'has "student_13" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50122/students/50489/snapshots">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko9_131.UseanKaannoksenSanakirja', 'a');

        this.echo('\nUseanKaannoksenSanakirja\'s student list\n---------------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises/50219/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_13', 'has a student named "student_13"');
            test.assertTextExists('student_1312', 'has a student named "student_1312"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50219/students/49220/snapshots">student_13') !== -1,
                                                     'has "student_13" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50219/students/50489/snapshots">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko9_133.Numerotiedustelu', 'a');

        this.echo('\nNumerotiedustelu\'s student list\n-------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/49219/exercises/50244/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 2, 'has exactly two students listed');

            test.assertTextExists('student_13', 'has a student named "student_13"');
            test.assertTextExists('student_1312', 'has a student named "student_1312"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50244/students/49220/snapshots">student_13') !== -1,
                                                     'has "student_13" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/49219/exercises/50244/students/50489/snapshots">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('k2013-ohpe', 'a');

        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.clickLabel('Viikko4_077.Lyyrakortti', 'a');

        this.echo('\nLyyrakortti\'s student list\n--------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/exercises/71/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 96, 'has exactly 96 students listed');

            test.assertTextExists('student_1004', 'has a student named "student_1004"');
            test.assertTextExists('student_1005', 'has a student named "student_1005"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/71/students/2/snapshots">student_1004') !== -1,
                                                     'has "student_1004" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/71/students/372/snapshots">student_1005') !== -1,
                                                     'has "student_1005" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko5_086.LyyrakorttiJaKassapaate', 'a');

        this.echo('\nLyyrakorttiJaKassaPaate\'s student list\n--------------------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/exercises/114/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 97, 'has exactly 91 students listed');

            test.assertTextExists('student_1004', 'has a student named "student_1004"');
            test.assertTextExists('student_1005', 'has a student named "student_1005"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/114/students/2/snapshots">student_1004') !== -1,
                                                     'has "student_1004" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/114/students/372/snapshots">student_1005') !== -1,
                                                     'has "student_1005" with a correct link to snapshots');

            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('Viikko6_103.Tietokanta', 'a');

        this.echo('\nTietokanta\'s student list\n-------------------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/courses/1/exercises/368/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 91, 'has exactly 91 students listed');

            test.assertTextExists('student_1004', 'has a student named "student_1004"');
            test.assertTextExists('student_1005', 'has a student named "student_1005"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/368/students/2/snapshots">student_1004') !== -1,
                                                     'has "student_1004" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/1/exercises/368/students/372/snapshots">student_1005') !== -1,
                                                     'has "student_1005" with a correct link to snapshots');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
