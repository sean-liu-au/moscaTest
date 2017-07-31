'use strict';

var _mqtt = require('mqtt');

var _mqtt2 = _interopRequireDefault(_mqtt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _mqtt2.default.connect('mqtt://localhost');

client.on('connect', function () {
    client.subscribe('test');
    client.publish('test', '11111');
});

client.on('message', function (topic, message) {
    console.log(message.toString());
    client.end();
});