var net = require('net');

var port = process.env.PORT || 8080;

var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/;



net.createServer(function(from) {
    var to = net.createConnection({
        host: "52.169.89.213",
        port: "9089"
    });
    from.pipe(to);
    to.pipe(from);
}).listen(port);