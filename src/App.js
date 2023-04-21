import React, { useState,Suspense } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Head from "./Chachaphong/header/Head"
import Header from "./Chachaphong/header/Header"
import LoginAdmin from "./Metha/loginAdmin";
import Pages from "./Chachaphong/pages/Pages"
import Data from "./Chachaphong/Data"
import Cart from "./Chachaphong/Cart/Cart"
import Sdata from "./Chachaphong/shops/Sdata"
import Footer from "./Chachaphong/footer/Footer"
import Register from "./Metha/register"
import MainTypeproduct from "./Metha/fashionFiles";
import Login from "./Chirot/Login";
import UserUpdate from "./Chirot/UserUpdate";
import UserCreate from "./Chirot/UserCreate";
import UsersProducts from "./Chirot/UsersProducts";
import ProductsCreate from "./Chirot/ProductsCreate";
import ProductsUpdate from "./Chirot/ProductsUpdate";
import Users from './Chirot/Users';
import AllProduct from "./Jitima/AllProduct"
import Payment from "./Metha/payment"
import ProductType from "./Metha/eachPro";
import { useTranslation } from "react-i18next";



//////Metha
function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])
    const { t, i18n } = useTranslation();
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Suspense fallback="loading">
        <Head />
        <Router>
          {/* <Header CartItem={CartItem} /> */}
          <Switch>
            <Route path="/Allpro" exact>
              <AllProduct />
            </Route>
            <Route path="/login">
              <Login
              t={t} 
              i18n={i18n}
              />
            </Route>
            <Route path="/" exact>
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
                t={t}
                i18n={i18n}
              />
            </Route>
            <Route path="/register">
              <Register productType="mom_and_kids" />
            </Route>
            <Route path="/admin">
              <Users />
            </Route>
            <Route path="/mainType/IT_and_computer">
              <MainTypeproduct productType="IT_and_computer" />
            </Route>
            <Route path="/mainType/pet">
              <MainTypeproduct productType="pet" />
            </Route>
            <Route path="/mainType/beauty">
              <MainTypeproduct productType="beauty" />
            </Route>
            <Route path="/mainType/electronic">
              <MainTypeproduct productType="electronic" />
            </Route>
            <Route path="/mainType/mom_and_kids">
              <MainTypeproduct productType="mom_and_kids" />
            </Route>
            <Route path="/mainType/HnG">
              <MainTypeproduct productType="HnG" />
            </Route>
            <Route path="/mainType/fashionW">
              <MainTypeproduct productType="fashionW" />
            </Route>
            <Route path="/mainType/fashionM">
              <MainTypeproduct productType="fashionM" />
            </Route>
            <Route path="/mainType/book_and_office">
              <MainTypeproduct productType="book_and_office" />
            </Route>
            <Route path="/mainType/SME_product">
              <MainTypeproduct productType="SME_product" />
            </Route>
            <Route path="/mainType/healthy">
              <MainTypeproduct productType="healthy" />
            </Route>
            <Route path="/login!">
              <LoginAdmin />
            </Route>
            <Route path="/Products">
              <UsersProducts />
            </Route>
            <Route path="/productsU/:id">
              <ProductsUpdate />
            </Route>
            <Route path="/productsC">
              <ProductsCreate />
            </Route>
            <Route path="/update/:id">
              <UserUpdate />
            </Route>
            <Route path="/create">
              <UserCreate />
            </Route>
            <Route path="/produc/:id">
              <ProductType
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            </Route>
            <Route path="/cart" exact>
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            </Route>
            <Route path="/payments">
              <Payment />
            </Route>
          </Switch>
        </Router>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Suspense>
    </>
  );
}

export default App