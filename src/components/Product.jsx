import React from 'react';
import MobileProductImages from './MobileProductImages';

function Product() {
  return (
    <main>
      <MobileProductImages />
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
          <img src="images/icon-minus.svg" alt="decrease quantity" />
          <span>0</span>
          <img src="images/icon-plus.svg" alt="increase quantity" />
        </div>
        <button className="product-buy-button">
          <img src="images/icon-cart.svg" alt="add to cart" />
          <span>Add to cart</span>
        </button>
      </section>
    </main>
  );
}

export default Product;
