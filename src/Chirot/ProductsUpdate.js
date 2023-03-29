import React, { useState,useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, TextField, Button, Typography } from "@mui/material/";
import { useParams } from "react-router-dom";
import '../Metha/CSS/index.css'

export default function ProductsUpdate(ID) {
  const params = useParams();
  const [picture, setavatar] = useState("");
  // const [pay, setPay] = useState("");
  const [Pname, setPname] = useState("");
  const [stock, setstock] = useState("");
  const [price, setprice] = useState("");
  const [detail, setDetail] = useState("");
  const [priceType, setPriceType] = useState("");
  const [cuation, setCuation] = useState("");
  const [warring, setWarring] = useState("");
  const [type, settype] = useState("");
  const [promotion, setPromotion] = useState("");
  const [product, setproduct] = useState([]);


  //////Chirot 
  useEffect(() => {
    fetch(`http://localhost:3002/user!/products/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setproduct(result[0]);
        // console.log(result[0]);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      avatar: picture,
      Pname: Pname,
      stock: stock,
      price: price,
      detail: detail,
      priceType: priceType,
      caution: cuation,
      warring: warring,
      type: type,
      promotion: promotion,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3002/user!/products/${params.id}`, requestOptions)
      .then((response) => response.json())
      .then(result => {
        alert(result['message'])
          console.log(params)
    })
      .catch((error) => console.log("error", error));
  };

console.log(Pname,stock,price,detail,priceType,cuation,warring,type,promotion)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>
          update product
        </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  id="picture"
                  label={"Picture : "+product.image_product}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setavatar(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="pname"
                  label={"Name : "+product.product_name}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setPname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="price"
                  label={"Price : "+product.product_price}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setprice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Service"
                  label={"Type : "+product.product_type}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setPriceType(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="stock"
                  label={"Stock : "+product.product_stock}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setstock(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="caution"
                  label={"Caution : "+product.product_caution}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => settype(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Detail"
                  label= {"detail : "+product.product_detail}
                  // product.product_detail
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setDetail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="priceType"
                  label={"PriceType : "+product.product_pay}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setCuation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="warring"
                  label={"Warring : "+product.product_warring}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setWarring(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="promotion"
                  label={"Promotion : "+product.product_promotion}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setPromotion(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Edit
                </Button>
              </Grid>
            </Grid>
          </form>
      </Container>
    </React.Fragment>
  );
}
