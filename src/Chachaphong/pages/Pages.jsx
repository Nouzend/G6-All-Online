import React, { useEffect, useState } from "react";
import Home from "../MainPage/Home";
import Shop from "../shops/Shop";
import Header from "../header/Header";
import axios from "axios";
import { FaComments } from "react-icons/fa";
import Chat from "../Phonlawat/Chat";
import Tipchumporn from "../../Availability/pages/Home";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";


  //อ๋อง
  const socket = io.connect("http://localhost:3001");

const Pages = ({ t, i18n }) => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const username = query.get("username");
  const [room, setRoom] = useState("default-room");

  useEffect(() => {
    joinRoom();
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setIsOpen(true);
    }
  };

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
    // นายศิวกร สนธิวา(เมฆ)
    <>
      <Header CartItem={products} t={t} i18n={i18n} />
      <Home t={t} i18n={i18n} />
      <Tipchumporn />
      <Shop products={products} t={t} />
      {/* //อ๋อง */}
      <div
        onClick={handleButtonClick}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          cursor: "pointer",
        }}
      >
        <FaComments size={30} color="#32CD32" />
      </div>
      {isOpen && <Chat socket={socket} username={username} room={room} />}
    </>
  );
};

export default Pages;
