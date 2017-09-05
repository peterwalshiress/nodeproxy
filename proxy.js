var net = require('net');

var port = process.env.PORT || 8080;

var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/;

var addr = {
    from: [port.toString()],
    to: addrRegex.exec("http://52.169.89.213:9089")
};

console.log(addr);

if (!addr.from || !addr.to) {
    console.log('Usage: <from> <to>');
}


net.createServer(function(from) {
    var to = net.createConnection({
        host: addr.to[2],
        port: addr.to[3]
    });
    from.pipe(to);
    to.pipe(from);
}).listen(addr.from[0]);