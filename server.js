var __port = "8888";

var http = require("http");
var url  = require("url");

function start( route, handle )
{
    function onRequest( request, response )
    {
        var post_data = "";
        var pathname = url.parse(request.url).pathname;

        console.log("Request received for " + pathname);

        request.setEncoding("utf-8");

        request.addListener("data", function( post_data_chunk )
        {
            post_data += post_data_chunk;
            console.log("Received POST data chunk '" + post_data_chunk + "'");
        });

        request.addListener("end", function()
        {
            route(handle, pathname, response, post_data);
        });
    }

    http.createServer(onRequest).listen(__port);

    console.log("node.js server has started on port " + __port);
}

exports.start = start;
