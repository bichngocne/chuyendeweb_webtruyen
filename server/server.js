import dotenv from 'dotenv';
dotenv.config();
//import
import http from 'http';

// Creating the node server
const SERVER = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

// GET port
const PORT = process.env.PORT || 5000;

// Firing up the server on selected port
SERVER.listen(PORT);

SERVER.on("listening", () => {
    console.log("[Server]::LISTEN:%s", PORT);
});

// Callback function for checking connecting or error
SERVER.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});