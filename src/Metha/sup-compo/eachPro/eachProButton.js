import React, { useEffect,useState } from "react";
import addToCshop from "../../function/addToshop";
import eachprofrom from "./eachProForm";
import { handleAddToCart } from "../handleCart/handleCart";
import Example from "../handleCart/handleCart";

export const Product = ({
  product,
  index,
  addToCart,
  decreaseQty,
}) => {

  useEffect(() => {
    setCartItems([product]);
  }, [product]);

  const [cartItems, setCartItems] = useState([]);


  let productPay;
  try {
    productPay = product.product_pay.split(",");
  } catch (error) {
    console.error(error);
    productPay = [];
  }

  const data = [
    {
      cateImg:
        "https://www.allonline.7eleven.co.th//media/i/Free_Delivery_7_11-13273-1.png",
      cateName: "จัดส่งออนไลน์",
    },
    {
      cateImg:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/7-eleven_logo.svg",
      cateName: "7-ELEVEN",
    },
  ];



  return (
    <div className=" gap-3 card-text">
      <div className="">
        <h1 className="price col">{product.product_price}</h1>
      </div>
      <div className="">
        <h1 className="promotion col price">{product.product_promotion}</h1>
      </div>
      <div className="">
          <Example CartItem={cartItems}/>
        <button type="button" class="btn btn-success " onClick={addToCshop}>
          ซื้อ
        </button>
      </div>
      <div>
        <hr />
        <p>การจัดส่ง</p>
        {data.map((value) => {
          return (
            <div className="owl-stage-outer">
              <img src={value.cateImg} alt="" style={{ margin: "10px" }} className="image-box-F" />
                  <span>{value.cateName}</span>
                <div className="col">
              <div className="" key={index}>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
