exports.name = 'Students view';

// URL source for testing
exports.source = '';

exports.tests = [

    {
        name: 'should render student list',
        func: function (done) {

            exports.driver
                    .url('localhost:8000')
                    .getSource(function(source) {

                exports.source = source;

                buster.assertions.assert(source.indexOf('student_1002') !== -1);
                buster.assertions.assert(source.indexOf('student_1003') !== -1);
                buster.assertions.assert(source.indexOf('student_1004') !== -1);

            }).end(done);
        }
    },

    {
        name: 'should render student list with correct URLs',
        func: function() {

            buster.assertions.assert(exports.source.indexOf('#/students/2/courses') !== -1);
            buster.assertions.assert(exports.source.indexOf('#/students/7/courses') !== -1);
            buster.assertions.assert(exports.source.indexOf('#/students/167/courses') !== -1);

        }
    }
];
