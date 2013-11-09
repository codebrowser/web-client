
var mockData = {};

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

/* Setup for casper tests. */
if (typeof casper !== 'undefined') {

    // Redirects casperjs's browser console to main console.
    casper.on('remote.message', console.log.bind(console));

    casper.options.waitTimeout = config.test.async.timeout;
    casper.options.verbose = true;

    // Skip suite after one test fails.
    casper.on('step.error', function() {
        casper.test.skip(0, 'Skipping rest of the test suite.');
        casper.test.done();
    });

    var hasErrors;

    // Notify about script errors on current page.
    casper.on('page.error', function (msg) {

        hasErrors = true;
        casper.warn('Script error on page: ' + msg);
    });

    // Executed after page load, but before any scripts.
    casper.on('page.initialized', function() {

        // Casperjs loads about:blank after failed suites. Creating the fakeserver would fail.
        if (this.getCurrentUrl() === 'about:blank') {
            return;
        }

        // Injects sinon's code into casperjs's browser.
        casper.page.injectJs('./node_modules/sinon/pkg/sinon-1.7.3.js');

        // To catch all requests made by codebrowser, fakeserver must be created before
        // $(document).ready() is triggered. However, creating sinon server in page.initialized
        // does not work, so the only way is to register our own handler before anyone else's.
        casper.evaluate(function(createFakeServer, mockData) {

            document.addEventListener('DOMContentLoaded', function() {
                createFakeServer(mockData);
            });
        }, createFakeServer, mockData);

        // Make sure each test run starts from clean state (no backbone cache etc).
        if (config.test.casperjs.clearLocalStorage) {

            casper.evaluate(function() { localStorage.clear(); });
        }
    });

    // Executed before each test suite.
    casper.test.setUp(function() {

        hasErrors = false;
    });

    // Executed only after successful test suites.
    casper.on('run.complete', function() {

        if (hasErrors) {
            casper.test.fail('Page has no script errors.');
        }
    });

    // Executed after each test suite.
    casper.test.tearDown(function() {

        mockData = {};
        casper.echo('');
    });
}

/* Setup for jasmine tests. */
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
