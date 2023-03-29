import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import addToCart from "../../Metha/function/addFunc"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>สินค้า</h2>
                {/* <ul>
                  <li><a href="">/</a></li>
                </ul> */}
              </div>
              <div className='heading-right row '>
                <a href="/Allpro">ดูทั้งหมด</a>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop