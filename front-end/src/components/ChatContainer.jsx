import React, { useEffect, useState } from "react";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socket from "../socket";
import "../style.css";

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on("chat", (chats) => setChats(chats));
    socket.on("message", (msg) => setChats((prev) => [...prev, msg]));
    return () => {
      socket.off("chat");
      socket.off("message");
    };
  }, []);

  const addMessage = (chat) => {
    const newChat = {
      username: localStorage.getItem("user"),
      message: chat,
      avatar: localStorage.getItem("avatar"),
    };
    socket.emit("newMessage", newChat);
  };

  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };

  return (
    <div className="chat-app-container">
      {user ? (
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-user-info">
              <span className="chat-username">👤 {user}</span>
            </div>
            <button className="logout-btn" onClick={Logout}>
              Logout
            </button>
          </div>
          <ChatLists chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
