const PORT = 5000;

const server = require('./server.js');

server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
}); 
