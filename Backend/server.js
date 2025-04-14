const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket'); // Import the socket functions
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server); // Initialize the socket with the server

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});