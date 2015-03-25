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
  https = require("https"),
  url = require("url"),
  path = require("path"),
  fs = require("fs"),
  // template engine: http://jade-lang.com
  jade = require('jade'),
  // date parser/formatting library: http://momentjs.com
  moment = require('moment'),

  // Port can be set from the command line, or default to 8888
  port = process.argv[2] || 8888;

// set up an empty global variable to hold our event data
global.events = []
// Request event data from google
getCalendarEvents();
// and query it preiodically
setInterval(getCalendarEvents, 1000*60*15);

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
  fs.readFile(filename, "binary", function(error, file) {
    if (error) {
      if (error.code === 'ENOENT') {
        // This is a File not found error: respond with 404
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

    // Render the file through jade if file extension is .jade
    if (path.extname(filename) === '.jade') {
      // the `locals` var is passed to the template engine, for dynamic data
      // TODO: replace this with a calendar service
      var locals = {
        events: global.events
      }
      // render the file
      file = jade.render(file, locals)
    }
    // query google again, to update the cached data for the next request
    getCalendarEvents();
    // And respond. Success!
    response.writeHead(200);
    response.write(file, "binary");
    response.end();
  });

// Tell the server to start listening on the designated port.
}).listen(parseInt(port, 10));

// Write to the console, to let the user know that it's runninng.
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");

// This function requests JSON data from the Google Calendar API
function getCalendarEvents() {
    var result = "",
    
    GOOGLE_CALENDAR_ID = "0u9nj9urhs8887sla430apcqfc@group.calendar.google.com",
    GOOGLE_API_KEY = "AIzaSyAEdf5fMaVptJRNf_TFW0f9WzM1v-ZT8rQ", // Don't be a jerk with this
    
    // https request options
    options = {
        host: 'www.googleapis.com',
        path: '/calendar/v3/calendars/'+GOOGLE_CALENDAR_ID+'/events?key='+GOOGLE_API_KEY
    },
    
    callback = function(response) {
        //response is a stream
        response.on("data", function(data) {
            //collect data as it comes in
            result += data
        }).on("end", function() {
          console.log(result);
          // update our "cache" when the request ends. 
            global.events = formatEvents(JSON.parse(result))    
        })
    }
    
    // make the request
    request = https.request( options , callback ),
    response = request.end()
}

// Extract just the data that we need from google's response
function formatEvents(json) {
    var results = []
    // loop over the items array
    json.items.forEach(function(item) {
        // and collect the data that we need
        results.push(
            {
              time: moment(item.start.dateTime).format('MMMM Do YYYY, h:mm a'), 
              description: item.description
            }
        )
    });
    return results;
}