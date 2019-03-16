const express = require("express");

const db = require('./data/db.js');

const PORT = 5000;

const server = express();

server.use(express.json());


server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`)
}); 
