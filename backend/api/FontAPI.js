const express = require("express");
const app = express();
const connection = require("../database");

app.use(express.json());
app.use(express.urlencoded());

const GetpFont = async (req, res) => {
  try {
    const conn = await connection;
    const results = await conn.query(`SELECT * FROM featuresall.product where product_type = ?`,[req.params.productType]);
    res.send(results[0]);
  } catch (err) {
    res.status(500).send(err);
    return console.log(err);
  }
};


const Getproducts = async (req, res) => {
  try {
    const conn = await connection;
    const results = await conn.query("SELECT * FROM featuresall.product");
    res.send(results[0]);
  } catch (err) {
    res.status(500).send(err);
    return console.log(err);
  }
};


  const GetproductsByid = async (req,res) =>{
    try {
      const conn = await connection;
      const results = await conn.query("SELECT * FROM product WHERE id = ?", [
        req.params.id,
      ]);
      if (results.length > 0) {
        res.send(results[0]);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
      console.log(err);
    }
  }

  module.exports = {
    GetpFont,
    GetproductsByid,
    Getproducts
};