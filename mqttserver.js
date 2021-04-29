const aedes = require('aedes')();
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const {baseline, wave} = require('./types')
const port = 8888

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
    console.log('websocket server listening on port ', port)
    console.log('mqtt broker begins running...');
    baseline()
    wave()
})
aedes.on('clientReady', function (client) {
    console.log('client connected,id=', client.id);
});
aedes.on('clientDisconnect', function(client) {
    console.log('Client Disconnected:', client.id);
});
aedes.on('publish', function (packet, client) {
    // console.log(`${packet.topic.toString()},${packet.payload.toString()}`)
});

