import React, { useState, SetState, useEffect } from "react";
import axios from "axios";
import Navbar from "./sup-compo/navbar/navbarMain";
import Scrolling from "./sup-compo/navbar/scrolling";
import Product from "./sup-compo/producHead/typeHead";
// import FashionHead from "./sup-compo/navbar/navbarTest";
import TablePro from "./sup-compo/fashion/tablePro";
import Footer from "./sup-compo/navbar/Footer";
import Header from ".././Chachaphong/header/Header"
import "./CSS/App.css";
function Fashion( productType ) {
  console.log(productType.productType);
  const [products, setProducts] = useState([]);
  const [api, setApi] = useState("");
  
  useEffect(() => {
    switch (productType.productType) {
      case "beauty":
        setApi("http://localhost:3002/prod/pd/beauty");
        break;
      case "healthy":
        setApi("http://localhost:3002/prod/pd/healthy");
        break;
      case "electronic":
        setApi("http://localhost:3002/prod/pd/electronic");
        break;
      case "IT_and_computer":
        setApi("http://localhost:3002/prod/pd/IT_and_computer");
        break;
      case "mom_and_kids":
        setApi("http://localhost:3002/prod/pd/mom_and_kids");
        break;
      case "pet":
        setApi("http://localhost:3002/prod/pd/pet");
        break;
      case "HnG":
        setApi("http://localhost:3002/prod/pd/HnG");
        break;
      case "fashionW":
        setApi("http://localhost:3002/prod/pd/fashionW");
        break;
      case "fashionM":
        setApi("http://localhost:3002/prod/pd/fashionM");
        break;
      case "book_and_office":
        setApi("http://localhost:3002/prod/pd/book_and_office");
        break;
      case "SME_product":
        setApi("http://localhost:3002/prod/pd/SME_product");
        break;
      default:
        setApi("");
    }
  }, [productType.productType]);
  
  useEffect(() => {
    if (api !== "") {
      axios
        .get(api)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [api]);

  return (
    <div>
       <Header CartItem={products}/>
      <Navbar />
      <div className="container">
        <h2>{productType.productType} Products</h2>
        <hr />
        <div className="row">
          {products.slice(0, 6).map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
        <hr />
        <table className="table table-striped table-bordered mt-3 shadow p-3">
          <tbody>
            {products.slice(6, 20).map((product, index) => {
              if (index % 5 === 0) {
                return (
                  <tr>
                    {products.slice(index, index + 5).map((product) => (
                      <td>
                        <TablePro product={product} key={index} />
                      </td>
                    ))}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <Scrolling></Scrolling>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Fashion;
