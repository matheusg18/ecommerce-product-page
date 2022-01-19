import React, { useState } from 'react';
import CartBox from './components/CartBox';
import Header from './components/Header';
import Product from './components/Product';
import CartProvider from './context/CartProvider';
import './sass/style.scss';

function App() {
  const [showCartBox, setShowCartBox] = useState(false);

  return (
    <CartProvider>
      <Header setShowCartBox={setShowCartBox} />
      { showCartBox && <CartBox /> }
      <Product />
    </CartProvider>
  );
}

export default App;
