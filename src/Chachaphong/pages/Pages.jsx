  import React,{ useEffect, useState }  from "react"
  import Home from "../MainPage/Home"
  import Shop from "../shops/Shop"
  import Header from "../header/Header"
  import axios from "axios"




  const Pages = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:3002/user!/products`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
      <>
 <Header CartItem={products}/>
        <Home  />
        <Shop products={products}  />
      </>
    )
  }

  export default Pages
