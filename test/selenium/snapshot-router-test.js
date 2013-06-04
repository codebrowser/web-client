exports.name = 'Snapshot view';

exports.tests = [

    {
        name: 'should render snapshot with correct timestamp',
        func: function (done) {

            exports.driver
                   .url('localhost:8000/#/students/2/courses/1/exercises/3/snapshots/13')
                   .getSource(function (source) {

                        buster.assertions.assert(source.indexOf('Code Browser') !== -1);

                    }).end(done);
        }
    },

    {
        name: 'should render snapshot with correct file listing',
        func: function (done) {

            exports.driver
                   .url('localhost:8000/#/students/2/courses/1/exercises/3/snapshots/13')
                   .getSource(function (source) {

                        buster.assertions.assert(source.indexOf('LyyraKortti.java') !== -1);
                        buster.assertions.assert(source.indexOf('Paaohjelma.java') !== -1);

                    }).end(done);
        }
    },

    {
        name: 'should render snapshot with correct file name',
        func: function (done) {

            exports.driver
                   .url('localhost:8000/#/students/2/courses/1/exercises/3/snapshots/13')
                   .getSource( function (source) {

                        buster.assertions.assert(source.indexOf('<h2>LyyraKortti.java</h2>'));

                    }).end(done);
        }
    },

    {
        name: 'should render correct URLs to files in the list',
        func: function (done) {

            exports.driver
                   .url('localhost:8000/#/students/2/courses/1/exercises/3/snapshots/13')
                   .getSource(function (source) {

                        buster.assertions.assert(source.indexOf('<a href="#/students/2/courses/1/exercises/3/snapshots/13/files/15">LyyraKortti.java</a>') !== -1);
                        buster.assertions.assert(source.indexOf('<a href="#/students/2/courses/1/exercises/3/snapshots/13/files/14">Paaohjelma.java</a>') !== -1);

                    }).end(done);
        }
    }
];
