import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import DesktopProductImages from './DesktopProductImages';
import MobileProductImages from './MobileProductImages';

function Product() {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const submitQuantity = () => {
    addToCart(quantity);
    setQuantity(0);
  };

  return (
    <main>
      <DesktopProductImages />
      <section className="product">
        <h2 className="product-brand">Sneaker Company</h2>
        <h3 className="product-name">Fall Limited Edition Sneakers</h3>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="product-price">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
          <span className="original-price">$250.00</span>
        </div>
        <div className="product-quantity">
          <img
            src="images/icon-minus.svg"
            alt="decrease quantity"
            role="button"
            onClick={decreaseQuantity}
          />
          <input type="number" value={quantity} readOnly />
          <img
            src="images/icon-plus.svg"
            alt="increase quantity"
            role="button"
            onClick={increaseQuantity}
          />
        </div>
        <button type="submit" className="product-buy-button" onClick={submitQuantity}>
          <img src="images/icon-cart.svg" alt="add to cart" />
          <span>Add to cart</span>
        </button>
      </section>
    </main>
  );
}

export default Product;
