// // const express = require('express');
// // const http = require('http');
// // const socketIO = require('socket.io')
// // const path = require('path');

// // const app = express();
// // const server = http.createServer(app);
// // const io = socketIO(server);

// // const PORT = 5000;

// // app.use(express.static(path.join(__dirname, '../TestLiveChat')));

// // app.get("/", (req,res) => {
// //     res.sendFile(path.join(__dirname, '../TestLiveChat/index.html'));
// // });

// // // io.on("connect", (socket) => {
// // //     console.log("User connected");
// // //     socket.on("chat message", (msg) =>{
// // //         io.emit("chat message", msg);
// // //     })

// // //     socket.on("disconnect", () => {
// // //         console.log("User disconnected")
// // //     })
// // // })

// // io.on("connect", (socket) => {
// //     socket.on('newuser', (name) => {
// //         let newUser = name;
// //         console.log(`${newUser} connected`);

// //         socket.on('disconnect', () => {
// //             console.log('User disconnected');
// //             io.emit('disconnected', `${newUser} disconnected`)
// //         })
// //     })

// //     socket.on('chat message', (msg) => {
// //         io.emit('chat message', msg)
// //     })
// // })

// // server.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });

// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io')

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// const PORT = 5000;

// app.use(express.static(__dirname + '../src/Chatchapong/TestLiveChat'));

// app.get("/", (req,res) => {
//     res.sendFile(__dirname + "/ChatInterface.js'");
// })

// io.on("connect", (socket) => {
//   socket.on('newuser', (name) => {
//       let newUser = name;
//       console.log(`${newUser} connected`);

//       socket.on('disconnect', () => {
//           console.log('User disconnected');
//           io.emit('disconnected', `${newUser} disconnected`)
//       })
//   })

//   socket.on('chat message', (msg) => {
//       io.emit('chat message', msg)
//   })
// })

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

const express = require("express");
const app = express();
const http = require("http");
const cors = require('cors');
const {Server} = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message",data)
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

server.listen(3001, () => {
    console.log("Server is running at ort 3001")
})