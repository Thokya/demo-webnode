// const app = require('express')();
// const appid = process.env.APPID;

// app.get('/', (req, res) => {
//     res.send(`Appid : ${appid} Home page : Says hello!`);
// });

// app.get('/app1', (req, res) => {
//     res.send(`Appid : ${appid} APP1 page : Says hello!`);
// });

// app.get('/app2', (req, res) => {
//     res.send(`Appid : ${appid} APP2 page : Says hello!`);
// });

// app.get('/admin', (req, res) => {
//     res.send(`Appid : ${appid} ADMIN page : shouldn't now see this!`);
// });

// const port = process.env.PORT

// app.listen(port, () => console.log(`${appid} is listening on localhost:${port}`));

// import {
//     createServer
// } from "http";
// import {
//     server as WebSocketServer
// } from 'websocket';

const http = require('http');
const WebSocketServer = require('websocket').server;

const port = process.env.PORT;

const httpserver = http.createServer();
const websocket = new WebSocketServer({
    "httpServer": httpserver
});

httpserver.listen(port, () => console.log(`listening on localhost:${port}`));

websocket.on("request", request => {
    let con = request.accept(null, request.origin)

    con.on("open", () => console.log("opened"))
    con.on("close", () => console.log("CLOSED!!!"))
    con.on("message", message => {
        //publish the message to redis
        console.log(`Received message ${message.utf8Data}`)
        con.send(`${message.utf8Data}`)
    });
    //setInterval(() => con.send("connection active"), 10000)
});

// let ws = new WebSocket("ws://localhost:4000");
// ws.onmessage = message => console.log(`Received: ${message.data}`);
// ws.send("Hello! I'm client")


// https://intense-scrubland-56988.herokuapp.com/