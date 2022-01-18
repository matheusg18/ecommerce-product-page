import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import './sass/style.scss';

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = (quantity) => {
    setCart(quantity);
  };

  return (
    <>
      <Header cart={ cart } />
      <Product  addToCart={ addToCart } />
    </>
  );
}

export default App;
