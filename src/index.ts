import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
  console.log("user  connected");
  setInterval(() => {
    socket.send("hello user :)");
  }, 5000);
});
