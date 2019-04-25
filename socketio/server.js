var path = require("path");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var TS = require("./public/ts.js");

app.use(express.static("public"));

io.on("connection", function(socket) {
  console.log("io.on connection:", socket.id);
  socket.on("message", function(msg) {
    var message = new TS.Message(msg.type, msg.payload);
    var messageType = TS.GetMessageType(message.type);
    console.warn(messageType, "Message:", msg);

    io.emit("message", msg);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
