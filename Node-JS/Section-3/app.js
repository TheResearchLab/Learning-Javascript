// ============= Section 3 Notes ============//
// importing modules
const http = require('http');
const routes = require('./routes.js');

console.log(routes.someText);
const server = http.createServer(routes.handler);


server.listen(3000); 


