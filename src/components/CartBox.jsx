import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

function CartBox() {
  const { cart, resetCart } = useContext(CartContext);
  const subtotal = 125 * cart;

  // to-do: pop-up de item do carrinho

  return (
    <section className="cart-box">
      <h2>Cart</h2>
      {cart === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          <div className="cart-item">
            <img className="cart-item-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="Product in cart thumbnail" />
            <div className="cart-item-subtotal">
              <span className="cart-item-product-name">Fall Limited Edition Sneakers</span>
              <span>{`$125.00 x ${cart} `} <strong>{`$${subtotal}.00`}</strong></span>
            </div>
            <button type="button" onClick={resetCart}>
              <img src="images/icon-delete.svg" alt="delete cart item" />
            </button>
          </div>
          <button className="checkout-button" type="button">Checkout</button>
        </>
      )}
    </section>
  )
}

export default CartBox;
