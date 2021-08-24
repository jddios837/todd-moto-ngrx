const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(4201, () => {
  console.log('JSON Server is running');
});
