const { write } = require('fs');
const net = require('net');

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
  })
  conn.on('data', (data) => {
    console.log('server says:', data);
  });
  return conn;
};

console.log('connecting...');
connect();

module.exports = { connect };