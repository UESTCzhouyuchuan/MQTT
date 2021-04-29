const mqttPublish = require('./mqttPublish')
const {readFromFile} = require('../utils')

function baseline() {
    readFromFile('./data/baseline.json').then(data => {
        let len = data.length;
        let begin = 0, data_len = 40, plus = 1;
        setInterval(() => {
            if (begin + data_len >= len) {
                begin = 0
            }
            const sent = {
                init: null,
                add: null,
            }
            sent["init"] = data.slice(begin, begin + data_len)
            sent["add"] = data[begin + data_len]
            mqttPublish("baseline", sent)
            begin += plus
        }, 3000)
    })
}

module.exports = baseline
