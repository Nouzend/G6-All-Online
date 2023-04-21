  import React,{ useEffect, useState }  from "react"
  import Home from "../MainPage/Home"
  import Shop from "../shops/Shop"
  import Header from "../header/Header"
  import axios from "axios"
  import { FaComments } from 'react-icons/fa';
  import ChatInterface from '../Phonlawat/ChatInterface';


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
        {/* //อ๋อง */}
        <div onClick={handleButtonClick} style={{ position: 'fixed', bottom: '30px', right: '30px', cursor: 'pointer' }}>
        <FaComments size={30} color="#32CD32" />
      </div>
      {isOpen && <ChatInterface onMessageSent={handleMessageSent} />}
      </>
    )
  }

  export default Pages