const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const Chat = require('./models/Chat.js');
const Connection = require('./db.js');

const app = express();
app.use(express.json());


Connection();


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});


io.on("connection", (socket) => {
  console.log("New client connected");


  const loadMessages = async () => {
    try {
      const messages = await Chat.find().sort({ timestamp: 1 }).exec();
      socket.emit("chat", messages);
    } catch (err) {
      console.error("Error loading messages:", err);
    }
  };

  loadMessages();

  socket.on("newMessage", async (data) => {
    try {
      const newChat = new Chat(data);
      await newChat.save();

      const updatedChats = await Chat.find().sort({ timestamp: 1 }).exec();
      io.emit("chat", updatedChats);
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on("deleteMessage", async (id) => {
    try {
      await Chat.findByIdAndDelete(id);
      const updatedChats = await Chat.find().sort({ timestamp: 1 }).exec();
      io.emit("chat", updatedChats);
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3002, () => {
  console.log(" Server is running on http://localhost:3002");
});
