import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>i am the checkout page yoooo</h1>
      <div>{cartItems.map(() => {})}</div>
    </div>
  );
};

export default Checkout;
