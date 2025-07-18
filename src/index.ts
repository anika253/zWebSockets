import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
/*wss.on("connection", function (socket) {
  console.log("user  connected");
  setInterval(() => {
    socket.send("hello user :)");
  }, 5000);
});
*/ /*
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
*/
wss.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
