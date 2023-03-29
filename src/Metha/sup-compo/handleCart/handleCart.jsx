import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './sup-compo/dataContext';

function Product({ CartItem }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const newCartItem = {
      id: CartItem[0].id,
      product_name: CartItem[0].product_name,
      product_type: CartItem[0].product_type,
      product_price: CartItem[0].product_price,
    };
    addToCart(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify([...CartItem, newCartItem]));
    console.log(newCartItem)
  };

  return (
    <div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}

export default Product;
