/*import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
// event handler
/*
wss.on("connection", function (socket) {
  console.log("user  connected");
  setInterval(() => {
    socket.send("hello user :)");
  }, 5000);
});

/*
wss.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", (e) => {
    const message = e.toString(); // Convert to string explicitly
    console.log("Received:", message);

    if (message === "ping") {
      console.log("Sending pong");
      socket.send("pong");
    }
  });

  // Optional: Handle connection close
  socket.on("close", () => {
    console.log("user disconnected");
  });
});

wss.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
*/
/*
import React, { useEffect, useState, useRef } from "react";
function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    //@ts-ignore
    const msg = inputRef.current.value;
    //@ts-ignore
    socket.send(msg);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); //location of socket

    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    };
    ws.onerror = () => {};
    ws.close = () => {};
    ws.onopen = () => {};
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Message..."></input>
      <button onClick={sendMessage}>send </button>
    </div>
  );
}
export default App;

// send ping got pong

// scaling of chat application
/*
a web app has more than 1 server 

start more server when load increases
  web sockets can be stateful or stateless
  stateful - server remembers the client
  stateless - server does not remember the client
  load balancer - distributes the load among multiple servers

  web sockt server are serverful ...
  
  we get a socket objext here can u put it in database ?

  can we put socket object in database ?
  no we cannot put socket object in database
  we can put the socket id in database
  socket id is unique for each connection
  we can use redis to store the socket id and the corresponding user id
  redis is an in-memory database
  it is very fast
  it is used for caching
  it is used for session management
  it is used for real-time analytics
  it is used for pub/sub messaging
  it is used for leaderboards
  it is used for counting
  it is used for queuing
  it is used for rate limiting
  it is used for geospatial indexing  


      app.get(req, res)=>{
      
      res.json();
      }          
      can u put res onj in db?
      no we cannot put res object in database
      we can put the data in database
      we can put the response data in database
      we can put the response data in cache
      we can use redis to store the response data
      we can use redis to cache the response data
      
if 2 people want to chat with each other they should be connected to the same server
// scaling chat application is hard
 // we need to use a message broker like redis pub/sub or rabbitmq or kafka

 // what is pub sub?

  // pub sub is a messaging pattern where the sender (publisher) does not send messages directly to specific receivers (subscribers). Instead, messages are published to a central topic or channel, and subscribers receive messages from that topic or channel based on their interests.  
  // pub sub is used in chat applications to send messages to multiple users at once


browswer connects to websocket server
browser sends a message to websocket server
websocket server sends the message to all connected clients
all clients receive the message
called as broadcasting

all clients connected to the same server receive the message
creating a new room so that only clients in that room receive the same mesaage

SCALABLE web socket server architecture
HTTP server + WebSocket server + Message Broker (Redis Pub/Sub)
HTTP has non persistent connection
WebSocket has persistent connection
Message Broker is used to communicate between multiple WebSocket servers

*/

// _________ buiding broadcast system __________
