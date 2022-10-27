const { write } = require('fs');
const net = require('net');
const { setInterval } = require('timers');


const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('connection established');
  });
  conn.on('connect', () => {
    conn.write('Name: rjm');
    // setInterval(() => {
    //   conn.write('Move: up');}, 100);
    //   setInterval(() => {
    //     conn.write('Move: left');}, 50);
  })
  conn.on('data', (data) => {
    console.log('server says:', data);
  });
  return conn;
};

console.log('connecting...');
connect();

module.exports = { connect };