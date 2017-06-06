const http = require('http');
const app = require('./config/express');

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => {
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});

