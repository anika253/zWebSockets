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
    const ws = new WebSocket("ws://localhost:8080");
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
