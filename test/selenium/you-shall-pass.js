exports.name = 'Code Browser';

exports.tests = [

    {
        name: 'Title should be Code Browser',
        func: function (done) {

            exports.driver.getTitle(function (title) {

                buster.assertions.assert(title.indexOf('Code Browser') !== -1);

            }).end(done);
        }
    }
];
