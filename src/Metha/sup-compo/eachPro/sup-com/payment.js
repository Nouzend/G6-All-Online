import React, { useEffect } from "react";

export const Product = ({ product }) => {
    let productPay;
    try {
        productPay = product.product_pay.split(",");
        console.log(productPay);
    } catch (error) {
        console.error(error);
        productPay = [];
    }
    
    const Payment = (productPay) => {
        if (!productPay || !productPay.length) {
            return <></>;
        }
        
        switch (productPay[0]) {
            case "7-ELEVEN":
                return (
                    <>
              <img
                className=""
                src="https://www.allonline.7eleven.co.th//media/i/logo7-11-63537-1.jpg"
                alt=""
                style={{ margin: "5px" }}
                />
            </>
          );
        case "online":
          return (
              <>
              <img
                className=""
                src="https://www.allonline.7eleven.co.th//media/i/Free_Delivery_7_11-13273-1.png"
                alt=""
                style={{ margin: "5px" }}
                />
              <small>productPay</small>
            </>
          );
          default:
              return <></>;
            }
        };
        Payment();
    };
    
    export default Product;
    