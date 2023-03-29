import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../Metha/sup-compo/navbar/navbarMain";
import { Link } from "react-router-dom";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

//////Chirot 

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SimpleContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/user!/products")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  const ProductsDelete = (row) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: row.id,
    });
    console.log(row.id);

    var requestOptions = {
      method: "DELETE",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3002/user!/products/${row.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result.length > 0) {
          console.log(row.id);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
   <Navbar/>
    <button primary onClick={() => window.location.href="/" }>backhomepage</button>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="" sx={{ p: -5 }}>
        <Paper sx={{ p: 1 }}>
          <Box display={"flex"}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Prodoucts
              </Typography>
            </Box>
            <Box>
              <Fab variant="extended"onClick={() => (window.location.href = "/admin")}>
            จัดการผู้ใช้
              </Fab>
              <Fab
                color="secondary"
                aria-label="add"
                onClick={() => (window.location.href = `/productsC`)}
              >
                สร้าง
              </Fab>
            </Box>
          </Box>
          <TableContainer component={Paper} className="">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Picture</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Promotion</TableCell>
                  <TableCell align="center">Detail</TableCell>
                  <TableCell align="center">Caution</TableCell>
                  <TableCell align="center">Warring</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 100 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar alt={row.usernsme} src={row.image_product} />
                    </TableCell>
                    <TableCell align="center">{row.product_name}</TableCell>
                    <TableCell align="center">{row.product_price}</TableCell>
                    <TableCell align="center">{row.product_type}</TableCell>
                    <TableCell align="center">
                      {row.product_promotion}
                    </TableCell>
                    <TableCell align="center">{row.product_detail}</TableCell>
                    <TableCell align="center">{row.product_caution}</TableCell>
                    <TableCell align="center">{row.product_warring}</TableCell>
                    <TableCell align="center"></TableCell>
                    <Box>
                      <IconButton href="#" onClick={() => ProductsDelete(row)}>
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <Link>
                        <Fab
                          color="secondary"
                          aria-label="add"
                          onClick={() =>
                            (window.location.href = `/productsU/${row.id}`)
                          }
                        >
                          แก้ไข
                        </Fab>
                      </Link>
                    </Box>
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
