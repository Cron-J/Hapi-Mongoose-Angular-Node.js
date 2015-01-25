var Hapi = require('hapi'),
    Routes = require('./routes'),
    Db = require('./config/db'),
    Config = require('./config/config');
    
    
var app = {};
app.config = Config;

var server = Hapi.createServer(app.config.server.host, app.config.server.port, {cors: true});

server.route(Routes.endpoints);

server.start(function () {
  console.log('Server started ', server.info.uri);
});