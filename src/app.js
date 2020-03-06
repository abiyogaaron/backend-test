import http from 'http';
import express from 'express';
import config from './environment';
import * as bodyParser from "body-parser";

const app = express();

app.use(require('cors')({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./routes')(app);

const server = http.createServer(app);

//server initialization
function startServer(){
  server.listen(config.port, config.host, function(){
    console.log('Express server listening on %d, in %s mode %s', config.port, config.host, config.env);
  });
}

setImmediate(startServer)

exports = module.exports = app;