var restify = require('restify');

function respond(req, res, next) {
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.end('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});