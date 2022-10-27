const { connect } = require("http2");
const { write } = require('fs');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}
 
const handleUserInput = (key) => {

  if (key === "x" || key === '\u0003'){
    console.log('exiting out');
    process.exit();
  }
  if (key === 'w') {
  
    connection.write('Move: up');
  }
  if (key === '\u0061') {
   
    connection.write('Move: left');
  }
  if (key === 's') {

    connection.write('Move: down');
  }
  if (key === 'd') {

    connection.write('Move: right');
  }
  console.log('pressed', key);
}

module.exports = {setupInput, handleUserInput};