import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-success navbar-dark navbar">
      <div className="row col-12 justify-content-center text-center text-white">
        <li>
          <Link to="/login!" className="text-white">
          ALLOnline
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
