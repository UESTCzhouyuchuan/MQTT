const mqtt = require('mqtt');
const client = mqtt.connect('ws://localhost:8888');
const {getNow} = require('../utils')

function mqttPublish(name, data_arg) {
    let payload = JSON.stringify({data: data_arg, time: getNow()})
    client.publish(name, payload, {qos: 0, retain: true});
    return payload
}

module.exports = mqttPublish
