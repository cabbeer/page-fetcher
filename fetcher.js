const net = require('net');
const fs = require('fs/promises');


 
 const conn = net.createConnection({ 
   host: 'example.edu',
   port: 80
 });
 conn.setEncoding('UTF8');
 

 conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});



conn.on('data', (data) => {
  console.log(data);
  conn.end();

  async function example() {
    try {
      const content = data;
      await fs.writeFile('test.txt', content);
    } catch (err) {
      console.log(err);
    }
  }

  example();



});