import express from 'express';
import path from 'path';

export function createServer() {
  var server = express();

  server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
  });

  server.get('/api/items', (req, res) => {
    todoFetchItems()
      .then((items) => res.json(items))
      .catch((err) => res.json({error: err}));
  });

  return server;
}
