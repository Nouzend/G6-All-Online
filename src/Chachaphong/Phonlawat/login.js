// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3003/login", {
//         username,
//         password,
//       });
//       // set session token or cookie
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

import ChatInterface from './ChatInterface';

function login() {
  return (
    <div>
      <h1>Login Chat Page</h1>
      <ChatInterface />
    </div>
  );
}

export default login;