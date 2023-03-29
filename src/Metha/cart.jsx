import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FiShoppingCart } from "react-icons/fi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from './sup-compo/handleCart/sup-compo/dataContext';

function Example({ CartItem }) {
  useEffect(() => {
    setCartItems(CartItem);
  }, [CartItem]);

  const { cartItems, addToCart,removeFromCart } = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [cartItem,setCartItems] = useState([])

  console.log(cartItems)
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const handleRemoveItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    localStorage.setItem('cartItems', JSON.stringify(newItems));
    let cost = 0;
    newItems.forEach((item) => {
      cost += item.product_price * item.quantity;
    });
    setTotalCost(cost);
  };
  

  const handleQuantityChange = (index, quantity) => {
    const newItems = [...cartItems];
    newItems[index] = { ...newItems[index], quantity };
    setCartItems(newItems);
    let cost = 0;
    newItems.forEach((item) => {
      cost += item.product_price * item.quantity;
    });
    setTotalCost(cost);
  };
  
  useEffect(() => {
    let cost = 0;
    cartItems.forEach((item) => {
      cost += item.product_price * 1;
    });
    setTotalCost(cost);
  }, [cartItems]);

  return (
    <div>
      <div onClick={(e) => {e.preventDefault(); handleShow();}}><FiShoppingCart className="me-2" /></div>
      <Offcanvas show={showCart} placement="end" onHide={handleClose} onClick={(e) => {e.preventDefault()}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ตะกร้าสินค้า</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center mb-3">
            <FiShoppingCart className="me-2" />
            <h5 className="m-0">ตะกร้าสินค้า</h5>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-muted">ไม่มีสินค้าในตะกร้า</p>
          ) : (
            <ListGroup>
              {cartItems.map((item, index) => (
                <>
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.product_name}</strong>
                      <br />
                      <small className="text-muted">{item.product_type} x {item.product_price}</small>
                      <div className="mt-2">
                        <Button variant="secondary" size="sm" className="me-2" onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</Button>
                        {item.product_stock}
                        <Button variant="secondary" size="sm" className="ms-2" onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</Button>
                      </div>
                    </div>
                    <div className="text-end">
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>
                        <FaTrash />
                      </Button>
                    </div>
                  </ListGroup.Item>
                  <hr />
                </>
              ))}
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <strong>ราคารวมทั้งหมด</strong>
                <div>{totalCost} บาท</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary" size="sm" onClick={() => window.location.href="/payments"}>สั่งซื้อสินค้า</Button>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
 );
}
export default Example;