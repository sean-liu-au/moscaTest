import mqtt from 'mqtt';

let client= mqtt.connect('mqtt://localhost');


client.on('connect',()=>{
    client.subscribe('test');
    client.publish('test', '11111');
});

client.on('message',(topic,message)=>{
    console.log(message.toString());
    client.end()
});