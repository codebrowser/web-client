describe('Diff', function () {

    it('should have correct amount of differences', function () {

        var differences = new codebrowser.model.Diff('Something.', 'Something.\nNew.');

        expect(differences.getDifferences().all.length).toBe(1);
        expect(differences.getDifferences().replace.length).toBe(0);
        expect(differences.getDifferences().insert.length).toBe(1);
        expect(differences.getDifferences()['delete'].length).toBe(0);

        expect(differences.getCount().total()).toBe(1);
        expect(differences.getCount().replace).toBe(0);
        expect(differences.getCount().insert).toBe(1);
        expect(differences.getCount()['delete']).toBe(0);
    });

    it('deleted something', function () {

        var differences = new codebrowser.model.Diff('Something.', '');

        expect(differences.getDifferences()['delete'].length).toBe(1);
        expect(differences.getCount()['delete']).toBe(1);

        expect(differences.getDifferences()['delete'][0].type).toBe('delete');
        expect(differences.getDifferences()['delete'][0].overwrite).toBeFalsy();
        expect(differences.getDifferences()['delete'][0].offset).toBe(0);
        expect(differences.getDifferences()['delete'][0].fromRowStart).toBe(0);
        expect(differences.getDifferences()['delete'][0].fromRowEnd).toBe(0);
        expect(differences.getDifferences()['delete'][0].rowStart).toBe(0);
        expect(differences.getDifferences()['delete'][0].rowEnd).toBe(0);
        expect(differences.getDifferences()['delete'][0].lines).toBe('Something.\n');
    });

    it('inserted something', function () {

        var differences = new codebrowser.model.Diff('', 'Something.');

        expect(differences.getDifferences().insert.length).toBe(1);
        expect(differences.getCount().insert).toBe(1);

        expect(differences.getDifferences().insert[0].type).toBe('insert');
        expect(differences.getDifferences().insert[0].overwrite).toBeFalsy();
        expect(differences.getDifferences().insert[0].rowStart).toBe(0);
        expect(differences.getDifferences().insert[0].rowEnd).toBe(0);
    });

    it('replaced something with something else', function () {

        var differences = new codebrowser.model.Diff('Some.', 'Something.');

        expect(differences.getDifferences().replace.length).toBe(1);
        expect(differences.getCount().replace).toBe(1);

        expect(differences.getDifferences().replace[0].type).toBe('replace');
        expect(differences.getDifferences().replace[0].overwrite).toBeFalsy();
        expect(differences.getDifferences().replace[0].rowStart).toBe(0);
        expect(differences.getDifferences().replace[0].rowEnd).toBe(0);
    });

    it('replaced something to nothing', function () {

        var differences = new codebrowser.model.Diff('Some.\nSomething.', 'Some.\n');

        expect(differences.getDifferences()['delete'].length).toBe(1);
        expect(differences.getCount()['delete']).toBe(1);

        expect(differences.getDifferences()['delete'][0].type).toBe('delete');
        expect(differences.getDifferences()['delete'][0].overwrite).toBeTruthy();
        expect(differences.getDifferences()['delete'][0].rowStart).toBe(1);
        expect(differences.getDifferences()['delete'][0].rowEnd).toBe(1);
    });

    it('replaced something to nothing, contains new delete', function () {

        var differences = new codebrowser.model.Diff('    }\n    \n    ', '    }\n');

        expect(differences.getDifferences()['delete'].length).toBe(2);
        expect(differences.getCount()['delete']).toBe(2);

        expect(differences.getDifferences()['delete'][0].type).toBe('delete');
        expect(differences.getDifferences()['delete'][0].overwrite).toBeTruthy();
        expect(differences.getDifferences()['delete'][0].rowStart).toBe(1);
        expect(differences.getDifferences()['delete'][0].rowEnd).toBe(1);
    });

    it('replaced nothing to something, contains new delete', function () {

        var differences = new codebrowser.model.Diff(' \n    public int getKorkeus() {\n',
                                                     '\n    public void setOmena(Omena omena) {\n\n    public int getKorkeus() {\n');

        expect(differences.getDifferences()['delete'].length).toBe(1);
        expect(differences.getCount()['delete']).toBe(1);

        expect(differences.getDifferences()['delete'][0].type).toBe('delete');
        expect(differences.getDifferences()['delete'][0].overwrite).toBeTruthy();
        expect(differences.getDifferences()['delete'][0].rowStart).toBe(0);
        expect(differences.getDifferences()['delete'][0].rowEnd).toBe(0);
    });

    it('replaced nothing to something', function () {

        var differences = new codebrowser.model.Diff('\n', '\nHello.');

        expect(differences.getDifferences().insert.length).toBe(1);
        expect(differences.getCount().insert).toBe(1);

        expect(differences.getDifferences().insert[0].type).toBe('insert');
        expect(differences.getDifferences().insert[0].rowStart).toBe(1);
        expect(differences.getDifferences().insert[0].rowEnd).toBe(1);
    });

    it('replace contains deleted lines', function () {

        var differences = new codebrowser.model.Diff('Some.\nHello there.\nHow are you?', 'Some.\nHello ');

        expect(differences.getDifferences().replace.length).toBe(1);
        expect(differences.getCount().replace).toBe(1);

        expect(differences.getDifferences()['delete'].length).toBe(1);
        expect(differences.getCount()['delete']).toBe(1);

        expect(differences.getDifferences().replace[0].type).toBe('replace');
        expect(differences.getDifferences().replace[0].overwrite).toBeFalsy();
        expect(differences.getDifferences().replace[0].rowStart).toBe(1);
        expect(differences.getDifferences().replace[0].rowEnd).toBe(1);

        expect(differences.getDifferences()['delete'][0].type).toBe('delete');
        expect(differences.getDifferences()['delete'][0].rowStart).toBe(2);
        expect(differences.getDifferences()['delete'][0].rowEnd).toBe(2);
    });

    it('replace contains inserted lines', function () {

        var differences = new codebrowser.model.Diff('Some.\nHello there.', 'Some.\nHello there, kiddo.\nGood day! This is\nAwesome.');

        expect(differences.getDifferences().replace.length).toBe(1);
        expect(differences.getCount().replace).toBe(1);

        expect(differences.getDifferences().insert.length).toBe(1);
        expect(differences.getCount().insert).toBe(2);

        expect(differences.getDifferences().replace[0].type).toBe('replace');
        expect(differences.getDifferences().replace[0].overwrite).toBeFalsy();
        expect(differences.getDifferences().replace[0].rowStart).toBe(1);
        expect(differences.getDifferences().replace[0].rowEnd).toBe(1);

        expect(differences.getDifferences().insert[0].type).toBe('insert');
        expect(differences.getDifferences().insert[0].rowStart).toBe(2);
        expect(differences.getDifferences().insert[0].rowEnd).toBe(3);
    });
});
