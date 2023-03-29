import React from "react";
import addToCart from "../.././function/addFunc";

export const Product = ({ product }) => {
  return (
    <div className="">
      <div
        className="rounded-top shadow p-3 mb-5 bg-body rounded"
        onClick={() => addToCart(product)}
      >
        <img
          className="image-box rounded shadow p-3"
          src={product.image_product}
          alt={product.product_name}
          style={{ margin: "5px" }}
        />
        <p>{product.product_name}</p>
        <p className="card-text">{product.product_detail}</p>
      </div>
      <p>
        {product.product_price} {product.product_promotion}
      </p>
    </div>
  );
};

export default Product;
