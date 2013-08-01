casper.test.begin('Exercises view', 12, function suite(test) {

    casper.start('http://localhost:8000', function() {

        this.clickLabel('Courses', 'a');

        // Wait for the new page to load given selector
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.clickLabel('ohpe', 'a');

        this.echo('\nohpe\'s exercise list\n--------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 3, 'has exactly three exercises listed');
            test.assertTextExists('Viikko4_077.Lyyrakortti', 'has an exercise named "Lyyrakortti"');
            test.assertTextExists('Viikko5_086.LyyrakorttiJaKassapaate', 'has an exercise named "LyyrakorttiJaKassapaate"');
            test.assertTextExists('Viikko6_103.Tietokanta', 'has an exercise named "Tietokanta"');

            // Go one step back in browser's history
            casper.back();
        });
    });

    casper.then(function () {

        this.clickLabel('mooc-ohja', 'a');

        this.echo('\nmooc-ohja\'s exercise list\n-------------------------');

        this.waitForSelector('#exercises-container', function () {

            test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
            test.assertElementCount('td', 5, 'has exactly five exercises listed');
            test.assertTextExists('Viikko11_142.MuistavaSanakirja', 'has an exercise named "MuistavaSanakirja"');
            test.assertTextExists('Viikko12_156.Matopeli', 'has an exercise named "Matopeli"');
            test.assertTextExists('Viikko7_114.Sanakirja', 'has an exercise named "Sanakirja"');
            test.assertTextExists('Viikko9_131.UseanKaannoksenSanakirja', 'has an exercise named "UseanKaannoksenSanakirja"');
            test.assertTextExists('Viikko9_133.Numerotiedustelu', 'has an exercise named "Numerotiedustelu"');

        });
    });

    casper.run(function() {

        test.done();
        this.echo('');

    });
});
