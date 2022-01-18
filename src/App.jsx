import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import CartProvider from './context/CartProvider';
import './sass/style.scss';

function App() {
  return (
    <CartProvider>
      <Header />
      <Product />
    </CartProvider>
  );
}

export default App;
