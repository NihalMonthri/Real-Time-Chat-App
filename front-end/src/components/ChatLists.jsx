import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import socket from "../socket";


const ChatLists = ({ chats }) => {
  const endRef = useRef();
  const currentUser = localStorage.getItem("user");

  const handleDelete = (id) => {
    try {
      socket.emit("deleteMessage", id);
    } catch (error) {
      console.error("Error emitting delete event:", error);
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div
          className={`chat-message ${chat.username === currentUser ? "sender" : "receiver"}`}
          key={chat._id}
        >
          <img
            src={chat.avatar || 'default-avatar.png'}  
            alt={`${chat.username}'s avatar`}
            className="avatar"
          />
          <div className="message-content">
            <strong>{chat.username === currentUser ? "You" : chat.username}</strong>
            <p>{chat.message}</p>
            <button className="delete-btn" onClick={() => handleDelete(chat._id)}>🗑 Delete</button>
          </div>
        </div>
      ))}
      <div ref={endRef}></div>
    </div>
  );
};

ChatLists.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string,  
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatLists;
