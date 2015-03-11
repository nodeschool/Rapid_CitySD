/*
    This is a simple node server that will respond to requests on localhost.
    Call it from the command line with `node serve.js [port]`

    This script is intended for learning purposes.
    A production system would require much more robust error handling.

    However, it serves to help us understand how node interoperates with http requests
    and file system resources.

    It will serve html, js and css files directly, and will render jade files to html.
    This naive implementation relies on the browser to parse the content-type of the
    requested files ("text/css", "text/html", "image/jpeg", etc.).
*/

// Import node packages with the `require` function.
// This provides utility functions for http and filesystem resources
var http = require("http"),
  url = require("url"),
  path = require("path"),
  fs = require("fs"),
  // template engine: http://jade-lang.com
  jade = require('jade'),

  // Port can be set from the command line, or default to 8888
  port = process.argv[2] || 8888;

// Start the server.
// The createServer() function takes a callback (receiving request and response objects)
// that will be executed on each request.
http.createServer(function(request, response) {

  // parse the request url to find the file that is being requested.
  var uri = url.parse(request.url).pathname,
    // the filename is built from the cwd (current working directory) of
    // the current process, and the parsed uri path
    filename = path.join(process.cwd(), 'site', uri);

  try {
    // If the requested filename is a directory (eg, '/', the site root),
    // we will render and serve the 'index.jade' file from that directory
    if (fs.statSync(filename).isDirectory()) filename += '/index.jade';
  } catch (error) {
    if (error.code === 'ENOENT') {
      // This is a File not found error: return 404
      response.writeHead(404, {
        "Content-Type": "text/plain"
      });
      response.write("404 Not Found\n");
      response.end();
      return;

    } else {
      // Respond to other errors with Status code 500: "Internal server error"
      response.writeHead(500, {
        "Content-Type": "text/plain"
      });
      response.write(err + "\n");
      response.end();
      return;
    }
  }

  // Read the file in binary format. The callback receives any errors, and the file
  fs.readFile(filename, "binary", function(err, file) {
    if (error && error.code === 'ENOENT') {
      response.writeHead(404, {
        "Content-Type": "text/plain"
      });
      response.write("404 Not Found\n");
      response.end();
      return;
    } else if (error) {
      // Respond to other errors with Status code 500: "Internal server error"
      response.writeHead(500, {
        "Content-Type": "text/plain"
      });
      response.write(err + "\n");
      response.end();
      return;
    }

    // Render the file through jade if file extension is .jade
    if (path.extname(filename) === '.jade') {
      // the `locals` var is passed to the template engine, for dynamic data
      // TODO: replace this with a calendar service
      var locals = {
        events: getCalendarEvents()
      }
      // render the file
      file = jade.render(file, locals)
    }
    // And respond. Success!
    response.writeHead(200);
    response.write(file, "binary");
    response.end();
  });

// Tell the server to start listening on the designated port.
}).listen(parseInt(port, 10));

// Write to the console, to let the user know that it's runninng.
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
