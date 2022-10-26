const net = require('net');

const connnect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  })
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('server says:', data);
  })
  return conn
};

console.log('connecting...');
connnect();