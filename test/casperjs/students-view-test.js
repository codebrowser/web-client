casper.test.begin('Students view', 67, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Students', 'a');

    });

    casper.then(function() {

        // Wait for the new page to load
        this.waitForSelector('#students-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
            test.assertElementCount('td', 4, 'has exactly four students listed');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses">student_423') !== -1,
                                                     'has "student_423" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses">student_480') !== -1,
                                                     'has "student_480" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses">student_13') !== -1,
                                                     'has "student_13" with a correct link to course list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses">student_1312') !== -1,
                                                     'has "student_1312" with a correct link to course list');
        });
    });

    casper.then(function () {

        this.clickLabel('student_423', 'a');

        this.echo('\nstudent_423\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/2/courses') !== -1, 'has correct URL');
            test.assertElementCount('td', 1, 'has exactly one course listed');
            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises">ohpe</a>') !== -1,
                                                     'course "ohpe" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('ohpe', 'a');

        this.echo('\nstudent_423\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/2/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 3, 'has exactly three exercises listed');

            test.assertTextExists('Viikko4_077.Lyyrakortti', 'has an exercise named "Lyyrakortti"');
            test.assertTextExists('Viikko5_086.LyyrakorttiJaKassapaate', 'has an exercise named "LyyrakorttiJaKassapaate"');
            test.assertTextExists('Viikko6_103.Tietokanta', 'has an exercise named "Tietokanta"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises/3/snapshots">Viikko4_077.Lyyrakortti') !== -1,
                                                     'has "Lyyrakortti" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises/100/snapshots">Viikko5_086.LyyrakorttiJaKassapaate') !== -1,
                                                     'has "LyyrakorttiJaKassapaate" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/2/courses/1/exercises/206/snapshots">Viikko6_103.Tietokanta') !== -1,
                                                     'has "Tietokanta" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_480', 'a');

        this.echo('\nstudent_480\n-----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/320/courses') !== -1, 'has correct URL');
            test.assertElementCount('td', 1, 'has exactly one course listed');
            test.assertTextExists('ohpe', 'has a course named "ohpe"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses/1/exercises">ohpe</a>') !== -1,
                                                     'course "ohpe" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('ohpe', 'a');

        this.echo('\nstudent_480\'s exercise list\n---------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/320/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 3, 'has exactly three exercises listed');

            test.assertTextExists('Viikko4_077.Lyyrakortti', 'has an exercise named "Lyyrakortti"');
            test.assertTextExists('Viikko5_086.LyyrakorttiJaKassapaate', 'has an exercise named "LyyrakorttiJaKassapaate"');
            test.assertTextExists('Viikko6_103.Tietokanta', 'has an exercise named "Tietokanta"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses/1/exercises/3/snapshots">Viikko4_077.Lyyrakortti') !== -1,
                                                     'has "Lyyrakortti" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses/1/exercises/100/snapshots">Viikko5_086.LyyrakorttiJaKassapaate') !== -1,
                                                     'has "LyyrakorttiJaKassapaate" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/320/courses/1/exercises/206/snapshots">Viikko6_103.Tietokanta') !== -1,
                                                     'has "Tietokanta" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_13', 'a');

        this.echo('\nstudent_13\n----------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/663/courses') !== -1, 'has correct URL');
            test.assertElementCount('td', 1, 'has exactly one course listed');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nstudent_13\'s exercise list\n--------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/663/courses/662/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises/664/snapshots">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has "MuistavaSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises/815/snapshots">Viikko12_156.Matopeli') !== -1,
                                                     'has "Matopeli" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises/1565/snapshots">Viikko7_114.Sanakirja') !== -1,
                                                     'has "Sanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises/1662/snapshots">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has "UseanKaannoksenSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/663/courses/662/exercises/1687/snapshots">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has "Numerotiedustelu" with a correct link to snapshots');

            casper.back();
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('student_1312', 'a');

        this.echo('\nstudent_1312\n------------');

        this.waitForSelector('#courses-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/1932/courses') !== -1, 'has correct URL');
            test.assertElementCount('td', 1, 'has exactly one course listed');
            test.assertTextExists('mooc-ohja', 'has a course named "mooc-ohja"');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises">mooc-ohja</a>') !== -1,
                                                     'course "mooc-ohja" has a correct link to exercise list');
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nstudent_1312\'s exercise list\n----------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/students/1932/courses/662/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises/664/snapshots">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has "MuistavaSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises/815/snapshots">Viikko12_156.Matopeli') !== -1,
                                                     'has "Matopeli" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises/1565/snapshots">Viikko7_114.Sanakirja') !== -1,
                                                     'has "Sanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises/1662/snapshots">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has "UseanKaannoksenSanakirja" with a correct link to snapshots');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/students/1932/courses/662/exercises/1687/snapshots">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has "Numerotiedustelu" with a correct link to snapshots');
        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
