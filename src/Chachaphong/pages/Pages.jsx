  import React,{ useEffect, useState }  from "react"
  import Home from "../MainPage/Home"
  import Shop from "../shops/Shop"
  import Header from "../header/Header"
  import axios from "axios"
  import ChatInterface from '../TestLiveChat/ChatInterface';


  const Pages = () => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3002/user!/products`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };
    const handleMessageSent = () => {
      setIsOpen(true);
    };

    return (
      <>
 <Header CartItem={products}/>
        <Home  />
        <Shop products={products}  />
      <button onClick={handleButtonClick}>Chat with us</button>
    {isOpen && <ChatInterface onMessageSent={handleMessageSent} />}
      </>
    )
  }

  export default Pages
