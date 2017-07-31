console.log('~~~~node test~~');

import mosca from 'mosca';
import redis from 'redis';

let ascoltatore={
    type:'redis',
    redis:redis,
    db:12,
    port:6379,
    return_buffers:true,
    host:'vgw-cache.fyo5xn.ng.0001.use2.cache.amazonaws.com'
};

let settings={
    backend:ascoltatore,
    persistence:{
        factory:mosca.persistence.Redis,
        host:'vgw-cache.fyo5xn.ng.0001.use2.cache.amazonaws.com',
        port:6379
    }
};

let server= new mosca.Server(settings);

server.on('clientConnected', client=>{
    console.log('~~~~client connected~~~~~', client.id);
});

server.on('published', (packet, client)=>{
    console.log('~~~~published~~~~', packet.payload);
});

server.on('ready', setup);

function setup() {
    console.log('~~~Mosca server is up and running ~~~~');
}