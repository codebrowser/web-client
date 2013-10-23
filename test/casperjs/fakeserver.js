/* Redirects casperjs's browser console to main console. */
casper.on('remote.message', console.log.bind(console));

/* Injects sinon's code into casperjs's browser. */
casper.on('page.initialized', function() {

    casper.page.injectJs('./node_modules/sinon/pkg/sinon-1.7.3.js');
});

/* Creates a sinon fake server and registers mock responses for given paths. */
casper.fakeServer = function(mockData) {

    var server = sinon.fakeServer.create();
    server.autoRespond = true;

    // Make sure each test run starts from clean state.
    localStorage.clear();

    // Ugly hack for clearing backbone cache.
    Backbone.fetchCache._cache = {};

    for (var path in mockData) {
        // Match URLs that have same root and path and optional query string in the end.
        server.respondWith(new RegExp(config.api.main.root + path + '(\\?.*)?$'),
            [200, { 'Content-Type': 'application/json' }, JSON.stringify(mockData[path])]);
    }

    // Prints a warning if request doesn't match any registered paths.
    server.respondWith(function(req) {
        console.log('No mock data for request: ' + JSON.stringify(req));
        req.respond(404, {}, '');
    });
};