import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
interface User {
  socket: WebSocket;
  room: string;
}
let allsockets: User[] = [];
{
    {socket : socket , room : "room1"},
    {socket: socket , room : "room2"},
    {socket: socket , room : "room3"},
}
// WebSocket is a native function ..not here

// runs on every new connection
/*
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
  socket.on("disconnect", () => {
    allsockets = allsockets.filter((s) => s !== socket);
    userCount--;
    console.log("user disconnected");
    console.log("user count:", userCount);
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
js runtime :
browser js -.no native http model
node js ->native http model , has naive websocket server also but we are using their library here 
bunjs -> native http model 
either join a room or create a room here in the chat application
type :join// what to do 
payload : 
{
  roomid : "abc",
  name : "anika"
}

type :message
payload :
{
  roomid : "abc",
  name : "anika",
  message : "hello"
}

server tell the user the msg to frwd it to every one



/*


**/
// now i wanna chat bw multiple clients nd rooms here
