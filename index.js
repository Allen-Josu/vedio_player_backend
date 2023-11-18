// import json-server from the library in index.ja file

const jsonServer = require("json-server");

// create json-server

const mediaPlayerServer = jsonServer.create();

//Create Path to Json File

const router = jsonServer.router("db.json");

// middleware to convert json to js

const middleware = jsonServer.defaults();

//use middleware and router in server

mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

// setup port for running server

const port = 5000 || process.env.PORT;

// to listen server for resolving request from client
mediaPlayerServer.listen( port,() => {
    console.log(
        `MediaPlayerServer started at ${port} and waiting for the request`
    );
});
