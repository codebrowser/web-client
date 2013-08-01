casper.test.begin('Exercises view', 22, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('ohpe', 'a');

        this.echo('\nohpe\'s exercise list\n--------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/courses/1/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 3, 'has exactly three exercises listed');

            test.assertTextExists('Viikko4_077.Lyyrakortti', 'has an exercise named "Lyyrakortti"');
            test.assertTextExists('Viikko5_086.LyyrakorttiJaKassapaate', 'has an exercise named "LyyrakorttiJaKassapaate"');
            test.assertTextExists('Viikko6_103.Tietokanta', 'has an exercise named "Tietokanta"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises/3/students">Viikko4_077.Lyyrakortti') !== -1,
                                                     'has LyyraKortti with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises/100/students">Viikko5_086.LyyrakorttiJaKassapaate') !== -1,
                                                     'has LyyraKorttiJaKassapaate with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/1/exercises/206/students">Viikko6_103.Tietokanta') !== -1,
                                                     'has Tietokanta with a correct link to student list');

            // Go one step back in browser's history
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nmooc-ohja\'s exercise list\n-------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertTruthy(this.getCurrentUrl().indexOf('#/courses/662/exercises') !== -1, 'has correct URL');
            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 5, 'has exactly five exercises listed');

            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/662/exercises/664/students">Viikko11_142.MuistavaSanakirja') !== -1,
                                                     'has MuistavaSanakirja with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/662/exercises/815/students">Viikko12_156.Matopeli') !== -1,
                                                     'has Matopeli with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/662/exercises/1565/students">Viikko7_114.Sanakirja') !== -1,
                                                     'has Sanakirja with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/662/exercises/1662/students">Viikko9_131.UseanKaannoksenSanakirja') !== -1,
                                                     'has UseanKaannoksenSanakirja with a correct link to student list');
            test.assertTruthy(this.getHTML().indexOf('<a href="#/courses/662/exercises/1687/students">Viikko9_133.Numerotiedustelu') !== -1,
                                                     'has Numerotiedustelu with a correct link to student list');

        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
