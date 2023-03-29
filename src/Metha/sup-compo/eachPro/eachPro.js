import React, { useEffect } from "react";

export const Product = ({ product }) => {
  return (
    <>
      <div className="container" style={{ margin: "0 auto" }}>
        <div className="row">
          <div className="center">
            <img
              className="image-box-E"
              src={product.image_product}
              alt={product.product_name}
              style={{ margin: "5px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
