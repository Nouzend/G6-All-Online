import React, {useState} from "react"
import { FiUser , FiShoppingCart } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom"
import Example from "../../Metha/cart";

const Search = ({ onSearch,CartItem }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <a href="/"> <img src = "https://www.allonline.7eleven.co.th/1523c9f77853e87958adda06f7de38de9f8caf21/assets/7online/images/logo.png" /> </a>
          </div>
          <div className='search-box f_flex'> 
            <i className='fa fa-search'></i>
            <form onSubmit={handleSubmit}></form>
             <input type="text" value={query}onChange={(event) => setQuery(event.target.value)}placeholder="ค้นหาสินค้า"/>
             
          <span>
          <button type="submit"><ImSearch /></button>
       </span>
       
          </div>

          <div className='icon f_flex width'>
          <a href='/register'>สมัครสมาชิก</a>
          <FiUser />
          <a href='/login'> เข้าสู่ระบบ</a>
            <div className='cart'>
              <Link to="">
              <Example CartItem={CartItem}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Search
