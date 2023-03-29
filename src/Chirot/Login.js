import React, { useState } from "react";
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





const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                setTimeout(() => {
                    window.location.href = "/";
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
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

