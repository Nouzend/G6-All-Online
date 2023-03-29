import React,{useState,useEffect} from "react";
import { redirect } from "react-router-dom";
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";

const Navbar = (product) => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:3002/user!/products/${params.id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [product]);
  return (
    <>
    <></>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" >
        <i className="fas fa-shopping-cart mr-2" onClick={() => history(-1)}> </i>
        </div>
        <a className="navbar-brand" href="/register">
        HOME
        </a>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
