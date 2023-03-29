import React from 'react';
import addToCart from '../../function/addFunc';
const Product = ({ product }) => {
  return (
    <div className="col-md-4 py-3">
      <div className="card">
        <img src={product.image_product} alt={product.product_name} className=" rounded-top shadow p-3 mb-5 bg-body rounded text-truncate" />
        <div className="card-body">
          <h4 className="card-title">{product.product_name}</h4>
          <p className="card-text text-truncate">{product.product_detail}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
        ซื้อสินค้า
      </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
