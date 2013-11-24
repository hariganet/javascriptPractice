var n = 0;
var http = require('http');
http.createServer(function(req, res){
  if(++n > 4){ a }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("result:" + n);
}).listen(3000, "127.0.0.1");
console.log('Server running at http://localhost:3000/');

