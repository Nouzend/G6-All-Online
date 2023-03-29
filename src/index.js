import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from '.././src/Metha/sup-compo/handleCart/sup-compo/dataContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
