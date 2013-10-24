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

        console.error('No mock data for request: ' + JSON.stringify(req));
        req.respond(404, {}, '');
    });
};

/* Running casper tests. */
if (typeof casper !== 'undefined') {

    /* Redirects casperjs's browser console to main console. */
    casper.on('remote.message', console.log.bind(console));

    casper.on('page.initialized', function() {

        /* Injects sinon's code into casperjs's browser. */
        casper.page.injectJs('./node_modules/sinon/pkg/sinon-1.7.3.js');

        // Make sure each test run starts from clean state (no backbone cache etc).
        casper.evaluate(function() { localStorage.clear(); });
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
