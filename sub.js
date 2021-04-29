const mqtt = require('mqtt');
const client = mqtt.connect('ws://127.0.0.1:8888');

client.subscribe('baseline', { qos: 1 });
client.on('connect', () => {
  // console.log("connect", client)
});
client.on('message', function (topic, message) {
  console.log(`subscribe message: ${message}`);
});
