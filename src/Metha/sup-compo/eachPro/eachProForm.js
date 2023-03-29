import React, { useEffect } from "react";

export const Product = ({ product }) => {
  return (
    <div className="col-md-3 py-3 align-text-bottom text-side">
      <div className="">
        <h1 className=" content-box price">{product.product_detail}</h1>
        <div className="badge rounded text-bg-light">
          <span className="col promotion">{product.product_caution}</span>
        </div>
        <div className="col badge rounded text-bg-light">
          <span className="promotion">{product.product_warring}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
