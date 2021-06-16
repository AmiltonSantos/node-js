const http = require('http');
const static = require('node-static');

const path = new static.Server(`${__dirname}/localhost`);

http.createServer(function (req,res){
  req.addListener('end', function(){
    path.serve(req, res);
  }).resume();
}).listen(8080);

console.log('Servidor criado com sucesso');

// Para iniciar o projeto digite no terminal o comando: node server.js
// Não rodar no brawser em MODO ANÔNIMO, pois o serviço não vai ser iniciado