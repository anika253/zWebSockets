import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
interface User {
  socket: WebSocket;
  room: string;
}
//maps , records
let allsockets: User[] = [];
{
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
*/
// how server responds to client

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === "join") {
      allsockets.push({
        socket,
        room: parsedMessage.payload.roomid,
      });
    }
  });
});

// parse ->string to obj
// stringify -> obj to string
// JSON : javascript object notation
// {"name":"anika","age":20}  ->string
// {name:"anika",age:20}  ->obj

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
check if type is chat or join in it here!

to convert an obj to string  call stringify operation .
let str2 = JSON.stringify(obj);
to convert string to obj call parse operation
JSON.parse(str2);

string ->parse ->obj
obj ->stringify ->string    








/*


**/
// now i wanna chat bw multiple clients nd rooms here
