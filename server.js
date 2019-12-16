var MongoClient = require('mongodb').MongoClient;
const WebSocket = require('ws');
var Score = require('./api/models/score');

const WSServer = WebSocket.Server;
var app = require('./app');
var port = process.env.PORT || 8000;
global.websocket;

startMongoDBConnection();

function startMongoDBConnection() {
  MongoClient.connect('mongodb://localhost/MandatoryAssignment3_localDB', function (err, db) {
    startWebSocketServer(db);
  });
}

function startWebSocketServer(db) {
  app.get('/', (req, res) => { console.log(`HTTP server is listening on localhost:${port}`); });
  const httpServer = app.listen(port, "localhost", () => {
    console.log(`HTTP server is listening on localhost:${port}`);
  });
  websocket = new WSServer({ server: httpServer });
  console.log(`WebSocket server is listening on localhost:${port}`);
  websocket.on('connection', wsClient => {
    Score.find({}, function (err, result) {
      if (err) {
        websocket.clients
          .forEach(
            client => client.send('An error occurred')
          )
      } else {
        websocket.clients
          .forEach(
            client => client.send(JSON.stringify(result))
          )
      }
    });

    wsClient.onmessage = (message) => {
      Score.find({}, function (err, result) {
        if (err) {
          websocket.clients
            .forEach(
              client => client.send('An error occurred')
            )
        } else {
          websocket.clients
            .forEach(
              client => client.send(JSON.stringify(result))
            )
        }
      });
    };
  });

};
