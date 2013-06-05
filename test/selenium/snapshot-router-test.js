var driver;

exports.name = 'Snapshot view';

exports.setUp = function() {

    driver = exports.driver;
    driver.url('localhost:8000/#/students/2/courses/1/exercises/3/snapshots/13');
}

exports.tests = [

    {
        name: 'should render snapshot with correct timestamp',
        func: function(done) {

            driver.waitFor('h2', 10000, function(callback) {
                if (callback === false) {
                    return false;
                }

                driver.getSource(function(source) {
                    console.log(source);
                    buster.assertions.assert(source.indexOf('09:33:34') !== -1);
                }).end(done);
            });
        }
    },

    {
        name: 'should render snapshot with correct file name',
        func: function(done) {

            driver.waitFor('h2', 10000, function(callback) {
                if (callback === false) {
                    return false;
                }

                driver.getSource(function(source) {
                    console.log(source);
                    buster.assertions.assert(source.indexOf('<h2>Paaohjelma.java</h2>') !== -1);
                }).end(done);
            });
        }
    },

    {
        name: 'should render correct URLs to files in the list',
        func: function(done) {

            driver.waitFor('h2', 10000, function(callback) {
                if (callback === false) {
                    return false;
                }

                driver.getSource(function(source) {
                    buster.assertions.assert(source.indexOf('<a href="#/students/2/courses/1/exercises/3/snapshots/13/files/14">LyyraKortti.java</a>') !== -1);
                    buster.assertions.assert(source.indexOf('<a href="#/students/2/courses/1/exercises/3/snapshots/13/files/15">Paaohjelma.java</a>') !== -1);
                }).end(done);
            });
        }
    },

    {
        name: 'should render snapshot with correct file listing',
        func: function(done) {

            driver.waitFor('h2', 10000, function(callback) {
                if (callback === false) {
                    return false;
                }

                driver.getSource(function(source) {
                    console.log(source);
                    buster.assertions.assert(source.indexOf('LyyraKortti.java') !== -1);
                    buster.assertions.assert(source.indexOf('Paaohjelma.java') !== -1);
                }).end(done);
            });
        }
    }
];
