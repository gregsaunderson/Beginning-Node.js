var server = require("./server");
var router = require("./router");
var request_handlers = require("./request_handlers");

var handle = {};
handle["/"]         = request_handlers.start;
handle["/start"]    = request_handlers.start;
handle["/validate"] = request_handlers.validate;

server.start(router.route, handle);
