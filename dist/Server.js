'use strict';

var _mosca = require('mosca');

var _mosca2 = _interopRequireDefault(_mosca);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('~~~~node test~~');

var ascoltatore = {
    type: 'redis',
    redis: _redis2.default,
    db: 12,
    port: 6379,
    return_buffers: true,
    host: 'vgw-cache.fyo5xn.ng.0001.use2.cache.amazonaws.com'
};

var settings = {
    backend: ascoltatore,
    persistence: {
        factory: _mosca2.default.persistence.Redis,
        host: 'vgw-cache.fyo5xn.ng.0001.use2.cache.amazonaws.com',
        port: 6379
    }
};

var server = new _mosca2.default.Server(settings);

server.on('clientConnected', function (client) {
    console.log('~~~~client connected~~~~~', client.id);
});

server.on('published', function (packet, client) {
    console.log('~~~~published~~~~', packet.payload);
});

server.on('ready', setup);

function setup() {
    console.log('~~~Mosca server is up and running ~~~~');
}