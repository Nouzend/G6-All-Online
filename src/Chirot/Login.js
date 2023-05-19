import React, { useState,useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chat from '../Chachaphong/LiveChat/Chat'
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

const socket = io.connect("http://localhost:3001");


function Login({t,i18n}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //อ๋อง
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState("");
    const history = useHistory();//ใช้กลับไปหน้า page
    const [room, setRoom] = useState("default-room");

    // useEffect(() => {
    //     joinRoom();
    // }, []);

    // const joinRoom = () => {
    //     if (username !== "" && room !== "") {
    //         socket.emit("join_room", room);
    //         // setShowChat(true);
    //     }
    // }

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setLoggedInUsername(username);
        socket.emit("join_room", room); // join the room "1234"
        history.push(`/?username=${username}&room=${room}`);//ส่ง username และ room ไปในรูปของ path
        localStorage.setItem("username", username);
    };

    
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = JSON.stringify({
            username: username,
            password: password,
        });

        var config = {
            method: "post",
            url: "http://localhost:3002/user/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) { 
                Swal.fire({
                    icon: "success",
                    title: "login success",
                    text: "welcome to our website",
                });
                handleLogin(username); // set isLoggedIn and loggedInUsername
                socket.emit("join_room", "1234"); // join the room "1234"
                setTimeout(() => {
                    const newURL = `/?username=${username}&room=${room}`;
                    window.location.href = newURL;
                  }, 3000);
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Username or Password is incorrect!",
                });
            });
    };

    if (isLoggedIn) {
        return <Chat socket={socket} username={loggedInUsername} room={room} />;//ส่งไป chat.js
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h2 className="text-center mb-4">Login</h2>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={handleUsername}
                                value={username}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePassword}
                                value={password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Register
                                    </Link>
                                </Grid>
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* //อ๋อง */}
                        {isLoggedIn && <Chat socket={socket} username={loggedInUsername} room={room} />}
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

