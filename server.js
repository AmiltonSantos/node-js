const http = require('http');
const static = require('node-static');

const path = new static.Server(`${__dirname}/localhost`);

http.createServer(function (req,res){
  req.addListener('end', function(){
    path.serve(req, res);
  }).resume();
}).listen(8080);

console.log('Servidor criado com sucesso, localhost:8080');