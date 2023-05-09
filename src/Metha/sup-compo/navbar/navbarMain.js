import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";
// สิริญาดา รัตนสิทธิ์
const Navbar = ({t,i18n}) => {
  return (
    <nav className="bg-success navbar-dark navbar">
      <div className="row col-12 justify-content-center text-center text-white">
      <ul className="d-flex list-unstyled" style={{ width: "100%" }}>
    <li className="flex-grow-1">
            <Link to="/login!" className="text-white d-block">
              Admin
            </Link>
          </li>
<li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("สินค้าขายดี")}
            </a>
          </li>
 <li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("สินค้าใหม่")}
            </a>
          </li>
<li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("สินค้าโปรโมชั่น")}
            </a>
          </li>
 <li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("รวมคูปองส่วนลด")}
            </a>
          </li>
<li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("สินค้าลดราคา")}
            </a>
          </li>
<li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("ผ่อน 0%")}
            </a>
          </li>
 <li className="flex-grow-1">
            <a className="text-white d-block" href="">
              {t("ลดล้างสต็อก")}
            </a>
          </li>
        <li>
          <Link to="/login!" className="text-white">
          ALLOnline
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
