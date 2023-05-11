import React, { useState } from 'react';
import ListItem from './ListItem';
import './styles.css';
import ShopCart from '../../../../Chachaphong/shops/ShopCart';

const List = ({ list }) => {
  const [count, setCount] = useState(0);

  const addToCart = (item) => {
    ShopCart.addItem(item);
  };


  return (
    <div className='list-item'>
      <div className='list-wrap'>
        {list.map((item) => (
          <div key={item.id} className='item-container'>
            <ListItem item={item} />
            <div className='item-overlay'>
              <button className='add-to-cart-button' onClick={() => addToCart(item)}>
                <i className='fa-solid fa-plus' style={{ float: 'right' }}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
