import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
// runs on every new connection
wss.on("connection", (socket) => {
  console.log("user connected");
  userCount++;
  console.log("user count:", userCount);
  socket.on("message", (e) => {
    console.log("message received:" + e.toString());
    setTimeout(() => {
      socket.send("server says" + e.toString());
    }, 1000);
  });
});
// how server responds to client

/*
how do u use express?
import express from "express";
const app= express();
these 2 lines create an websocket server
app.listen(3000);import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
like req, res used to communiation bw server and client
only diff bw wsockets and http is wsockets have persistent connection
and https has get , posyt, put , delete methods
web sockets have onmessage, onopen, onclose methods
how to receive and send msgs from server ?


/*


**/
