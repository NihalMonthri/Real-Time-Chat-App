import React, { useState } from "react";
import { FaComments } from "react-icons/fa6";
import "../style.css";
import _ from "lodash";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState("");

  const handleUser = () => {
    if (!userName.trim()) return;
    localStorage.setItem("user", userName);
    localStorage.setItem("avatar", `https://picsum.photos/id/${_.random(1, 1000)}/200`);
    setUser(userName);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <FaComments className="login-icon" />
        <h2>Welcome to Chat App!</h2>
        <input
          type="text"
          placeholder="Enter your name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Join Chat</button>
      </div>
    </div>
  );
};

export default UserLogin;
