import React, { useState } from 'react'
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState(0);

  const addToCart = (quantity) => {
    setCart(quantity);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
