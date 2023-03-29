import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Button, Typography } from '@mui/material/';
import Navbar from '../Metha/sup-compo/navbar/navbarMain';
//////Chirot 
export default function UserCreate() {
    const handleSubmit = event => {

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "username": username,
          "password": password,
          "role": role,
          "email": email
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        

          fetch("http://localhost:3002/user!/users!", requestOptions)
            .then(response => response.json())
            .then(result =>{
                alert(result['message'])
                if (result['status'] ==='ok'){
                    window.location.href = '/'
                }
            })
            .catch(error => console.log('error', error));
    }
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
        {/* <Navbar/> */}
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Create User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="usernamev" label="Username" variant="outlined"
                                fullWidth required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="password" label="Password" variant="outlined"
                                fullWidth required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="role" label="Role" variant="outlined"
                                fullWidth required
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="email" label="Email" variant="outlined"
                                fullWidth required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained">Create</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
        </>
    );
}

