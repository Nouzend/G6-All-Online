import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Button, Typography } from '@mui/material/';

//////Chirot 
export default function ProductsCreate() {
    const handleSubmit = event => {

        event.preventDefault();

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "product_name": product_name,
  "product_type": product_type,
  "product_price": product_price,
  "product_detail": product_detail,
  "product_warring": product_warring,
  "product_caution": product_caution,
  "product_pay": product_pay,
  "product_promotion": product_promotion,
  "product_stock": product_stock
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

          fetch("http://localhost:3002/user!/products!", requestOptions)
            .then(response => response.json())
            .then(result =>{
                alert(result['message'])
                if (result['status'] ==='ok'){
                    window.location.href = 'Products'
                }
            })
            .catch(error => console.log('error', error));
    }
 
    const [product_name, setproduct_name] = useState('');
    const [product_type, setProduct_type] = useState('');
    const [product_price, setProduct_price] = useState('');
    const [product_detail, setProduct_detail] = useState('');
    const [product_warring, setProduct_warring] = useState('');
    const [product_caution, setProduct_caution] = useState('');
    const [product_pay, setProduct_pay] = useState('');
    const [product_promotion, setProduct_promotion] = useState('');
    const [product_stock, setProduct_stock] = useState('');
    
    

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Create Prodoucts
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="product_name" label="Name" variant="outlined"
                                fullWidth required
                                onChange={(e) => setproduct_name(e.target.value)}
                            />
                        </Grid>
                        <>
                        </>
                        <Grid item xs={12} >
                            <TextField id="product_type" label="Type" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_type(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_price" label="Price" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_price(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_detail" label="Detail" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_detail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_warring" label="Warring" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_warring(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_caution" label="Caution" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_caution(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_pay" label="Pay" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_pay(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_promotion" label="Promotion" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_promotion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="product_stock" label="Stock" variant="outlined"
                                fullWidth required
                                onChange={(e) => setProduct_stock(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained">Create</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    );
}

