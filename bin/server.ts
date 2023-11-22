import * as http from 'http';
import debug from 'debug';
import app from '../src/app';
import 'dotenv/config';


if (require.main === module) {
const serverDebug = debug('nodestr:server');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log(`API running on port ${port}`);

function parsePort(val: string) {
const port = parseInt(val, 10);
if (isNaN(port)) {
return val;
}
if (port >= 10) {
return port;
}
return false;
}

function onError(error: NodeJS.ErrnoException) {
if (error.syscall !== 'listen') {
throw error;
}

const bind = typeof port === 'string' ? `Pipe ${port} `: `Port ${port}`;

switch (error.code) {
case 'EACCES':
console.error(`${bind} requires elevated privileges`);
process.exit(1);
break;
case 'EADDRINUSE':
console.error(`${bind} is already in use`);
process.exit(1);
break;
default:
throw error;
}
}

function onListening() {
const addr = server.address();
const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
serverDebug(`Listening on ${bind}`);
}

    // o seu código aqui
}

// const http = require('http');
// const debug = require('debug')('nodestr:server');
// const app = require('../src/app');

// const port = process.env.PORT || 3001;

// const server = http.createServer(app);

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// console.log(`Api executada na porta : ${port}`);


// function seachPort(val) {
//     const port = parseInt(val, 10);
//     if (isNaN(port)) {
//         return val;
//     }

//     if (port >= 10) {
//         return port;
//     }

//     return false;
// }

// function onError(error) {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }

//     const bind = typeof port === 'string'
//         ? 'Pipe ' + port
//         : 'Port' + port;

//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges ');
//             process.exit();
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use');
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }




// }

// function onListening() {
//     const addr = server.address();
//     const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port' + addr.port;

//     debug('Listening on ' + bind);
// }