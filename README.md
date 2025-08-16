# 💬 Real-Time Chat Application

A full-stack **real-time chat application** built with **React, Node.js, Socket.io, and MongoDB**.  
Users can register, log in, join chat rooms, and exchange messages instantly with live updates.  
The project demonstrates **full-stack development, real-time WebSocket communication, and database persistence**.

---

## 🚀 Features
- 🔐 User registration & login with secure password storage  
- 💬 Real-time messaging using **Socket.io** (WebSockets)  
- 🗂️ Multiple chat rooms support  
- 🕒 Persistent chat history stored in **MongoDB**  
- 🗑️ Send & delete messages  
- 📱 Responsive React frontend (dynamic live updates)   

---

## 🛠️ Tech Stack
**Frontend:** React, JavaScript (ES6+), HTML, CSS, Socket.io-client  
**Backend:** Node.js, Express, Socket.io  
**Database:** MongoDB + Mongoose  

---
## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NihalMonthri/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

### 2️⃣ Backend Setup (Server)
```bash
cd server
npm install
```
- Create a `.env` file in `server/` with:
  ```env
  MONGO_URI=your-mongodb-uri
  JWT_SECRET=your-secret-key
  PORT=5000
  ```

- Start backend:
  ```bash
  npm start
  ```

### 3️⃣ Frontend Setup (Client)
```bash
cd ../client
npm install
npm start
```

### 4️⃣ Open in Browser
Go to: [http://localhost:3000](http://localhost:3000)

---


