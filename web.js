var util = require('util');
var fs = require('fs');
var static = require('node-static');
var mustache = require('mustache');

var environment = process.env.NODE_ENV;
var port = process.env.PORT || 8080;
var serverOptions = {};
var errorTemplate = '<html><head><title>{{status}}</title></head><body><center><h1>{{status}}</h1></center><hr></body></html>';

// Default to development environment
if (!environment) {

    process.env.NODE_ENV = 'development';

    serverOptions.cache = false;
    serverOptions.headers = {

        'Cache-Control': 'no-cache, must-revalidate'
    }
}

var fileServer = new static.Server('./static', serverOptions);

// Create HTTP server
require('http').createServer(function (request, response) {

    // Serve file
    fileServer.serve(request, response, function (error) {

        // An error occured whilst trying to serve file
        if (error) {

            console.error('[%d %s] - %s', error.status, error.message, request.url);

            // Serve an error page if one exists (e.g. 404.html), otherwise just return the error status
            fs.exists(util.format('%s/%d.html', fileServer.root, error.status), function (exists) {

                if (exists) {
                    fileServer.serveFile(util.format('/%d.html', error.status), error.status, {}, request, response);
                } else {
                    response.writeHead(error.status, error.headers);
                    response.write(mustache.render(errorTemplate, { status: util.format('%d %s', error.status, error.message) }));
                    response.end();
                }
            });
        }
    });
}).listen(port);

console.log('Listening on :%s', port);
