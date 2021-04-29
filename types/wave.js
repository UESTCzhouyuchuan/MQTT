const {readFromFile} = require('../utils')
const mqttPublish = require('./mqttPublish')
function wave() {
    readFromFile('./data/wave.json').then(data => {
        let len = data.length;
        let begin = 0;
        setInterval(() => {
            if (begin >= len) {
                begin = 0
            }
            mqttPublish("wave", data[begin])
            begin++
        }, 1000)
    })
}

module.exports = wave
