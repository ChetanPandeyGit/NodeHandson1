const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/data') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'JSON Data!' }));
  } else {
    res.end('<h1>First Handson Node JS !</h1>');
  }
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});