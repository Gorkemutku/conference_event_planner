import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity 
} from './CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  if (cart.length === 0) {
    return (
      <div className="cart_container">
        <div className="empty_cart">
          <h2>🛒 Your Shopping Cart is Empty</h2>
          <p>No plants selected yet. Let's go find some beautiful plants!</p>
          <Link to="/products" className="continue_shopping_btn">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart_container">
      <div className="cart_header">
        <h1>🛒 Shopping Cart</h1>
      </div>

      <div className="cart_content">
        <div className="cart_items_section">
          <h2>Cart Items</h2>
          <table className="cart_table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="cart_row">
                  <td className="item_cell">
                    <div className="item_info">
                      <span className="item_emoji">{item.image}</span>
                      <div>
                        <div className="item_name">{item.name}</div>
                        <div className="item_category">{item.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="price_cell">${item.price.toFixed(2)}</td>
                  <td className="quantity_cell">
                    <div className="quantity_controls">
                      <button 
                        className="qty_btn"
                        onClick={() => handleDecrement(item.id)}
                      >
                        −
                      </button>
                      <span className="qty_display">{item.quantity}</span>
                      <button 
                        className="qty_btn"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="subtotal_cell">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="action_cell">
                    <button 
                      className="delete_btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑️ Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart_summary">
          <div className="summary_card">
            <h2>Order Summary</h2>
            
            <div className="summary_row">
              <span>Total Plants:</span>
              <span className="summary_value">{totalQuantity}</span>
            </div>
            
            <div className="summary_row">
              <span>Number of Items:</span>
              <span className="summary_value">{cart.length}</span>
            </div>
            
            <div className="summary_row total_row">
              <span>Total Cost:</span>
              <span className="total_amount">${totalCost.toFixed(2)}</span>
            </div>
            
            <button className="checkout_btn" disabled>
              💳 Coming Soon
            </button>
            
            <Link to="/products" className="continue_shopping_link">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
