#!/usr/bin/env node
<<<<<<< HEAD

/**
 * Module dependencies.
 */
=======
/* Shebang (UNIX) line */
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6

import * as http from "http";
import { app } from "../app";
import { serverPort } from "../config";

<<<<<<< HEAD
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || serverPort);
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

=======

const port = normalizePort(process.env.PORT || serverPort);
app.set("port", port);

const server = http.createServer(app);

>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

<<<<<<< HEAD
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val): boolean | number {

  const normalizedPort = parseInt(val, 10);

  if (isNaN(normalizedPort)) {
    // named pipe
    return val;
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort;
  }

  return false;
}

/**
 * Event listener for HTTP server 'error' event.
 */

=======
function normalizePort(val): boolean | number {
     const normalizePort = parseInt(val,10);

     if(isNaN(normalizePort)) {
         return normalizePort;
     }
    return false;
}
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
<<<<<<< HEAD

/**
 * Event listener for HTTP server 'listening' event.
 */

=======
>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
}
<<<<<<< HEAD
=======

>>>>>>> 2d2b6a60e45e7426806d46cecac5110121f796d6
