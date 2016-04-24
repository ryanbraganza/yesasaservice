var PORT = process.env.PORT || 4444;
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  var expletive = query.expletive || 'y';
  var yesAnd = function() {
    res.write(`${expletive}\n`, undefined, yesAnd);
  };
  yesAnd();
});

server.listen(PORT);
console.log('listening on', PORT);
