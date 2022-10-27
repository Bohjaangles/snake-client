const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
}
 
const handleUserInput = (key) => {
  if (key === "x" || key === '\u0003'){
    console.log('exiting out');
    process.exit();
  }
  console.log('pressed', key);
}

module.exports = {setupInput, handleUserInput};