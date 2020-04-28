const http = require ("http")
var app = http.createServer (function (request, response) { response.end ("Hello World") })
app.listen (3000, function () { console.log ("Server Listening on Port : 3000") })
