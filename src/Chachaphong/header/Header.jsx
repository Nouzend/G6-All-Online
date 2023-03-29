import React, {useState} from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  const [results, setResults] = useState([]);

    const handleSearch = (query) => {
      fetch(`/api/search?query=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <>
      {/* <Head /> */}
      <Search CartItem={CartItem} onSearch={handleSearch} />
      {/* <Navbar /> */}
    </>
  )
}

export default Header