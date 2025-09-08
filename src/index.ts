import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
let allsockets: WebSocket[] = [];
// WebSocket is a native function ..not always but here

// runs on every new connection
wss.on("connection", (socket) => {
  allsockets.push(socket);
  console.log("user connected");
  userCount++;
  console.log("user count:", userCount);
  socket.on("message", (e) => {
    console.log("message received:" + e.toString());

    for (let i = 0; i < allsockets.length; i++) {
      const s = allsockets[i];
      s.send(e.toString() + " from server to all clients");
    }
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
