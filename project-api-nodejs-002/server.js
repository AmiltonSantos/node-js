const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

// Para iniciar o projeto digite no terminal o comando: node server.js
// Não rodar no brawser em MODO ANÔNIMO, pois o serviço não vai ser iniciado