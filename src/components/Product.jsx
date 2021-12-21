import React from 'react';
import MobileProductImages from './MobileProductImages';

function Product() {
  return (
    <main>
      <MobileProductImages />
      <h2>Sneaker Company</h2>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div>
        <span>$125.00</span>
        <span>50%</span>
        <span>$250.00</span>
      </div>
      <div>
        <img src="images/icon-minus.svg" alt="decrease quantity" />
        <span>0</span>
        <img src="images/icon-plus.svg" alt="increase quantity" />
      </div>
      <button>
        <img src="images/icon-cart.svg" alt="add to cart" />
        <span>Add to cart</span>
      </button>
    </main>
  );
}

export default Product;
