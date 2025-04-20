// pages/Cart/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  // In a real app, you would get this from your state management
  const cartItems = [
    {
      id: 1,
      productId: 1,
      name: 'Graphic Print T-Shirt',
      image: '/images/products/tshirt-1.jpg',
      price: 34.99,
      size: 'M',
      quantity: 2
    },
    {
      id: 2,
      productId: 5,
      name: 'Cargo Joggers',
      image: '/images/products/joggers-1.jpg',
      price: 59.99,
      size: 'L',
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );
  const shipping = 4.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page section-padding">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-size">Size: {item.size}</p>
                    <div className="item-price">£{item.price.toFixed(2)}</div>
                    <div className="item-quantity">
                      <button>-</button>
                      <span>{item.quantity}</span>
                      <button>+</button>
                    </div>
                    <button className="remove-item">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>£{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceed to Checkout
              </Link>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;