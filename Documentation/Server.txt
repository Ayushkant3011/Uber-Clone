For Server.js file

Firstly we need to simply need to start a server 

const http = require('http'); ---> a built-in node.js module used to create an http server
const app = require('./app'); --> This is an external module (likely an Express application) that is imported from a file named app.js

process.env.port  ---> this allows the server to use the port number that is defined in the .env file


to make the server start listening on the specified port
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
});

Callback Function-> A callback function is a function that is passed as an argument to another function and is executed later, typically after an event or operation completes