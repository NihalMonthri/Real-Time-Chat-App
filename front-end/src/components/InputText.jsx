import React, { useState } from "react";

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="input-container">
      <textarea
        placeholder="Type your message..."
        rows="2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;
