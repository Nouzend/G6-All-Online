import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { ButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Navbar from '../Metha/sup-compo/navbar/navbarMain';



//////Chirot 
export default function SimpleContainer() {
    const [items, setItems] = useState([]);
// console.log(items)

    useEffect(() => {
        UserGet()
    }, [])

    const UserGet = () => {
        fetch("http://localhost:3002/user!/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }

    const UserDelete = (row) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "id": row.ID,
        });
        console.log(row.ID)

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:3002/user!/users/${row.ID}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result['message'])
                if (result.length > 0) {
                  console.log(row.ID)
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
        <Navbar/>
    <button primary onClick={() => window.location.href="/" }>backhomepage</button>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="" sx={{ p: -5 }}>
                <Paper sx={{ p: 1 }}>
                    <Box display="flex">
                        <Box sx={{ flexGrow: 1 }} >
                            <Typography variant="h6" gutterBottom component="div" >
                                Users
                            </Typography>
                        </Box>
                        <Box>
                        <Link href="Products" >
                        <Button variant="contained">จัดการสินค้า</Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="Create">
                                <Button variant="contained">สร้าง</Button>
                            </Link>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="right">Role</TableCell>
                                    {/* <TableCell align="center">created_at</TableCell> */}
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {items.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 3 } }}
                                    >
                                        <TableCell>
                                            {row.ID}
                                        </TableCell>
                                        <TableCell align="right">{row.username}</TableCell>
                                        <TableCell align="center">{row.password}</TableCell>
                                        <TableCell align="right">{row.role}</TableCell>
                                        {/* <TableCell align="center">{row.created_at}</TableCell> */}
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="right">
                                            <ButtonGroup >
                                                <Button>
                                                    <IconButton onClick={()=> window.location.href=`/Update/${row.ID}`} >
                                                        <Fingerprint />
                                                    </IconButton>
                                                </Button>
                                                <IconButton href="#" onClick={() => UserDelete(row)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </React.Fragment>
        </>
    );
}
