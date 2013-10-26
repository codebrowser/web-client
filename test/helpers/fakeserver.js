/* exported createFakeServer */

/* Helper function that creates a sinon fake server and registers mock responses for given paths.
 * If mockData value is a number then it is used as http status code. If it is string then
 * the response type is text/plain, and otherwise application/json. */
var createFakeServer = function(mockData) {

    var server = sinon.fakeServer.create();
    server.autoRespond = true;

    for (var path in mockData) {

        // Match URLs that have same root and path and optional query string in the end.
        var prefix = path.indexOf('http://') !== -1 ? '' : config.api.main.root;
        var urlRegEx = new RegExp(prefix + path + '(\\?.*)?$');
        var contentType = typeof mockData[path] === 'string' ? 'text/plain' : 'application/json';
        var code = typeof mockData[path] === 'number' ? mockData[path] : 200;
        server.respondWith(urlRegEx, [code, { 'Content-Type': contentType }, JSON.stringify(mockData[path])]);
    }

    // Prints a warning if request doesn't match any registered paths.
    server.respondWith(function(req) {

        throw new Error('No mock data for request: '  + JSON.stringify(req.url));
    });
};

/* Running casper tests. */
if (typeof casper !== 'undefined') {

    /* Redirects casperjs's browser console to main console. */
    casper.on('remote.message', console.log.bind(console));

    casper.options.waitTimeout = config.test.async.timeout;
    casper.options.verbose = true;

    var hasErrors;

    casper.on('page.error', function (msg) {

        hasErrors = true;
        casper.warn(msg);
    });

    casper.on('page.initialized', function() {

        /* Injects sinon's code into casperjs's browser. */
        casper.page.injectJs('./node_modules/sinon/pkg/sinon-1.7.3.js');

        // Make sure each test run starts from clean state (no backbone cache etc).
        if (config.test.casperjs.clearLocalStorage) {

            casper.evaluate(function() { localStorage.clear(); });
        }
    });

    casper.on('run.start', function() {

        hasErrors = false;
    });

    casper.on('run.complete', function() {

        if (hasErrors) {
            casper.test.fail('Page has no script errors.');
        }
    });

    casper.on('load.finished', function() {

        casper.evaluate(createFakeServer, {});
    });
}

/* Running jasmine tests. */
if (typeof jasmine !== 'undefined') {

    beforeEach(function () {

        // Without this Backbone.history.start() may fetch models used in previous specs.
        Backbone.history.navigate('');
        createFakeServer({});
    });

    afterEach(function () {

        createFakeServer({});
    });
}
