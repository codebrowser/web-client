casper.test.begin('Students view', 73, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load
        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('tbody tr', 101, 'has exactly 101 students listed');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses">student_1004') !== -1,
                                                     'has "student_1004" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/372/courses">student_1005') !== -1,
                                                     'has "student_1005" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses">student_13') !== -1,
                                                     'has "student_13" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to course list');
        });
    });

    casper.then(function () {

        this.clickLabel('student_1004', 'a');

        this.echo('\nstudent_1004\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/2/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');
            test.assertTextExists('k2013-ohpe', 'has a course named "k2013-ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises">k2013-ohpe</a>') !== -1,
                                                     'course "k2013-ohpe" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('k2013-ohpe', 'a');

        this.echo('\nstudent_1004\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/2/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 5, 'has exactly five exercises listed');

            test.assertTextExists('011.SuurempiLuku', 'has an exercise named "SuurempiLuku"');
            test.assertTextExists('021.Karkausvuosi', 'has an exercise named "Karkausvuosi"');
            test.assertTextExists('Viikko5_090.JoukkueetJaPelaajat', 'has an exercise named "JoukkueetJaPelaajat"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises/3/snapshots">011.SuurempiLuku') !== -1,
                                                     'has "SuurempiLuku" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises/15/snapshots">021.Karkausvuosi') !== -1,
                                                     'has "Karkausvuosi" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/2/courses/1/exercises/180/snapshots">Viikko5_090.JoukkueetJaPelaajat') !== -1,
                                                     'has "JoukkueetJaPelaajat" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_1005', 'a');

        this.echo('\nstudent_1005\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/372/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');
            test.assertTextExists('k2013-ohpe', 'has a course named "k2013-ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/372/courses/1/exercises">k2013-ohpe</a>') !== -1,
                                                     'course "k2013-ohpe" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('k2013-ohpe', 'a');

        this.echo('\nstudent_1005\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/372/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 5, 'has exactly five exercises listed');

            test.assertTextExists('011.SuurempiLuku', 'has an exercise named "SuurempiLuku"');
            test.assertTextExists('021.Karkausvuosi', 'has an exercise named "Karkausvuosi"');
            test.assertTextExists('Viikko5_090.JoukkueetJaPelaajat', 'has an exercise named "JoukkueetJaPelaajat"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/372/courses/1/exercises/3/snapshots">011.SuurempiLuku') !== -1,
                                                     'has "SuurempiLuku" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/372/courses/1/exercises/15/snapshots">021.Karkausvuosi') !== -1,
                                                     'has "Karkausvuosi" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/372/courses/1/exercises/180/snapshots">Viikko5_090.JoukkueetJaPelaajat') !== -1,
                                                     'has "JoukkueetJaPelaajat" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_13', 'a');

        this.echo('\nstudent_13\n----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/49220/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nstudent_13\'s exercise list\n--------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/49220/courses/49219/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises/49221/snapshots">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has "MuistavaSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises/49372/snapshots">Viikko12_156.Matopeli') !== -1,
                                                     'has "Matopeli" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises/50122/snapshots">Viikko7_114.Sanakirja') !== -1,
                                                     'has "Sanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises/50219/snapshots">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has "UseanKaannoksenSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/49220/courses/49219/exercises/50244/snapshots">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has "Numerotiedustelu" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_1312', 'a');

        this.echo('\nstudent_1312\n------------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/50489/courses') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 1, 'has exactly one course listed');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nstudent_1312\'s exercise list\n----------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students/50489/courses/49219/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('tbody tr', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises/49221/snapshots">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has "MuistavaSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises/49372/snapshots">Viikko12_156.Matopeli') !== -1,
                                                     'has "Matopeli" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises/50122/snapshots">Viikko7_114.Sanakirja') !== -1,
                                                     'has "Sanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises/50219/snapshots">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has "UseanKaannoksenSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/50489/courses/49219/exercises/50244/snapshots">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has "Numerotiedustelu" with a correct link to snapshots');
                                                     
            casper.back();
            casper.back();
        });
    });

    casper.then(function() {
		
        this.echo('\nsearching students with string "1004"\n------------');

        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('/#/students') !== -1, 'has correct URL');
            test.assertElementCount('tbody tr', 101, 'has exactly 101 students listed');
            test.assertSelectorHasText('tbody tr td a', 'student_1004', 'has name in seconde cell of first row in students table');
            
            this.sendKeys('#students-container input', '1004');
            
            test.assertVisible('tbody tr:first-child', 'has first row visible');
            test.assertNotVisible('tbody tr:nth-child(2)', 'has second row in-visible');
            test.assertNotVisible('tbody tr:last-child', 'has last row in-visible');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
