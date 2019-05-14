'use strict';
var http = require('http');
//var port = process.env.PORT || 1337;
var emp = require("../controllers/employee")
var setting = require("../setting");
var port = setting.port;

http.createServer(function (req, res) {
    switch (res.method) {
        case "GET":
            if (req.url === "/") {
                res.end();
            }
            else if (req.url === "/employee") {
                emp.getlist();
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "POST":
            break;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
