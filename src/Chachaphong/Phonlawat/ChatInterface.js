// // อ๋อง
// // import { useState ,useEffect} from "react";
// // import "./style.css";
// // import io from 'socket.io-client'
// // import Chat from './Chat'

// // const socket = io.connect("http://localhost:3001");

// // function ChatInterface() {
// //   const [username, setUsername] = useState("");
// //   const [room, setRoom] = useState("default-room");
// //   const [showChat, setShowChat] = useState(false);

// //   useEffect(() => {
// //       joinRoom();
// //   }, []);

// //   const joinRoom = () => {
// //       if (username !== "" && room !== "") {
// //           socket.emit("join_room", room);
// //           setShowChat(true);
// //       }
// //   }

// //   return (
// //       <div className="ChatInterface">
// //           {showChat ? (
// //               <Chat socket={socket} username={username} room={room}/>
// //           ) : (
// //               <div className="joinChatContainer">
// //                   <h3>Join Chat</h3>
// //                   <input 
// //                       type="text" 
// //                       placeholder="Name..." 
// //                       onChange={(event) => {
// //                           setUsername(event.target.value);
// //                       }}
// //                   />
// //                   <button onClick={joinRoom}>Join Room</button>
// //               </div>
// //           )}
// //       </div>
// //   );
// // }

// // export default ChatInterface;

// import { useState ,useEffect} from "react";
// import "./style.css";
// import io from 'socket.io-client'
// import Chat from './Chat'

// const socket = io.connect("http://localhost:3001");

// function ChatInterface() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("default-room");
//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
//       joinRoom();
//   }, []);

//   useEffect(() => {
//     // Retrieve username from local storage
//     const storedUsername = window.localStorage.getItem("username");
//     setUsername(storedUsername);
//   }, []);

//   const joinRoom = () => {
//       if (username !== "" && room !== "") {
//           socket.emit("join_room", room);
//           setShowChat(true);
//       }
//   }

//   return (
//       <div className="ChatInterface">
//           {showChat ? (
//               <Chat socket={socket} username={username} room={room}/>
//           ) : (
//               <div className="joinChatContainer">
//                   <h3>Join Chat</h3>
//                   <input 
//                       type="text" 
//                       placeholder="Name..." 
//                       onChange={(event) => {
//                           setUsername(event.target.value);
//                       }}
//                   />
//                   <button onClick={joinRoom}>Join Room</button>
//               </div>
//           )}
//       </div>
//   );
// }

// export default ChatInterface;


// // function ChatInterface() {
// //     const [username, setUsername] = useState("");
// //     const [room, setRoom] = useState("1234");
// //     const [showChat, setShowChat] = useState(false);

// //     const joinRoom = () => {
// //         if (username !== "" && room !== "") {
// //             socket.emit("join_room", room);
// //             setShowChat(true);
// //         }
// //     }

// //     return (
// //     <div className="ChatInterface">
// //         {/* {showChat ? ( */}
// //         <Chat socket={socket} username={username} room={room}/>
// //          {/* ) : ( */}
// //         <div className="joinChatContainer">
// //         <h3>Join Chat</h3>
// //         <input 
// //         type="text" 
// //         placeholder="Name..." 
// //         onChange={(event) => {
// //             setUsername(event.target.value);
// //         }}
// //     />
// //         <input 
// //         type="text" 
// //         placeholder="Room ID..." 
// //         onChange={(event) => {
// //             setRoom(event.target.value);
// //         }}
// //         />
// //         <button onClick={joinRoom}>Join Room</button>
// //         </div>
       
        
// //         {/* )} */}
// //     </div>
// //     );
// // }

// // export default ChatInterface;

// // import React, { useState } from "react";
// // import Chat from "./Chat";
// // import "./style.css";
// // import io from 'socket.io-client'

// // const socket = io.connect("http://localhost:3001");

// // function ChatInterface() {
// //   const [username, setUsername] = useState("");
// //   const [room, setRoom] = useState("default-room");
// //   const [showChat, setShowChat] = useState(false);

// //   const handleLogin = () => {
// //     if (username !== "" && room !== "") {
// //       setShowChat(true);
// //     }
// //   };

// //   return (
// //     <div className="ChatInterface">
// //       {showChat ? (
// //         <Chat socket={socket} username={username} room={room} />
// //       ) : (
// //         <div className="joinChatContainer">
// //             <h3>Login Chat</h3>
// //           <input
// //             type="text"
// //             value={username}
// //             placeholder="Enter username"
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //           <button onClick={handleLogin}>Login</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default ChatInterface;
