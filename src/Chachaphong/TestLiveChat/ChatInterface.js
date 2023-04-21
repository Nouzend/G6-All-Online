// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io();

// function ChatInterface(props) {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const name = prompt("What is your desired username?");
//     setUsername(name);

//     // Emit an event to the server to indicate that a new user has joined
//     socket.emit('newuser', name);

//     // Listen for incoming chat messages
//     socket.on('chat message', (msgObject) => {
//       setMessages((messages) => [...messages, msgObject]);
//     });

//     // Listen for incoming messages indicating that a user has disconnected
//     socket.on('user disconnected', (msg) => {
//       setMessages((messages) => [...messages, { name: 'System', msg }]);
//     });

//     // Listen for incoming messages indicating that a user has connected
//     socket.on('user connected', (msg) => {
//       setMessages((messages) => [...messages, { name: 'System', msg }]);
//     });

//   }, []);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue) {
//       // Emit the chat message to the server
//       socket.emit('chat message', { name: username, msg: inputValue });
//       setInputValue('');
//       props.onMessageSent();
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((msgObject, index) => (
//           <li
//             key={index}
//             className={msgObject.name === username ? 'right' : ''}
//           >
//             <span>{msgObject.name}: </span>
//             {msgObject.msg}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Type your message here..."
//         />
//         <button>Send</button>
//       </form>
//     </div>
//   );
// }

// export default ChatInterface;

// import React, { useEffect, useRef } from "react";
// import io from "socket.io-client";
// import "../TestLiveChat/css/style.css";

// const ChatInterface = () => {
//   const socketRef = useRef();
//   const messagesRef = useRef();
//   const inputRef = useRef();
//   const formRef = useRef();
//   const userIDRef = useRef(Date.now());

//   useEffect(() => {
//     socketRef.current = io();
//     const messages = messagesRef.current;
//     const input = inputRef.current;
//     const userID = userIDRef.current;

//     let name = prompt("What is your desired username?");

//     formRef.current.addEventListener("submit", (e) => {
//       e.preventDefault();
//       if (input.value) {
//         socketRef.current.emit("newuser", name);
//         socketRef.current.emit("chat message", {
//           name: name,
//           msg: input.value,
//           user: userID,
//         });
//         input.value = "";
//       }
//     });

//     socketRef.current.on("chat message", (msgObject) => {
//       const message = document.createElement("li");
//       const messageItem = document.createElement("span");
//       messageItem.textContent = `${msgObject.name}:${msgObject.msg}`;
//       if (msgObject.user === userID) {
//         message.classList.add("right");
//       }
//       message.appendChild(messageItem);
//       messages.appendChild(message);
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <ul ref={messagesRef}></ul>
//       <form ref={formRef}>
//         <input
//           type="text"
//           ref={inputRef}
//           autoComplete="off"
//           placeholder="โปรดใส่ข้อความ"
//         />
//         <button>Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatInterface;

import { useState } from "react";
import "./style.css";
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect("http://localhost:3001");

function ChatInterface() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    return (
    <div className="ChatInterface">
        {/* {showChat ? ( */}
        <div className="joinChatContainer">
        <h3>Join Chat</h3>
        <input 
        type="text" 
        placeholder="Name..." 
        onChange={(event) => {
            setUsername(event.target.value);
        }}
    />
        <input 
        type="text" 
        placeholder="Room ID..." 
        onChange={(event) => {
            setRoom(event.target.value);
        }}
        />
        <button onClick={joinRoom}>Join Room</button>
        </div>
        {/* ) : ( */}
        <Chat socket={socket} username={username} room={room}/>
        {/* )} */}
    </div>
    );
}

export default ChatInterface;