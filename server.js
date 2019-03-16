const express = require('express');

const DataRouter = require('./data/data-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', DataRouter);

server.get('/', (req, res) => {
  res.send(
    `<h2>Lambda Posts</h>
    <p>Welcome to Lambda Posts!</p>
  `);
});

server.get('*', (req, res) => {
  res.status(404).send(`
  <h2>Page Not Found :/</h>
`)
});

module.exports = server; 