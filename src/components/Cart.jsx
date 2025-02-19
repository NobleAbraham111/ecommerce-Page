import React from 'react';
import './Cart.css';


const Cart = ({ cartItems, updateQuantity, clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-popup">
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-group">
    {cartItems.map((item) => (
        <li key={item.id} className="list-group-item d-flex flex-column justify-content-between align-items-start">
            <div className="cart-item-info d-flex align-items-center">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="ms-3">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">
                    {item.price} x {item.quantity}
                    </div>
                </div>
            </div>

            <div className="cart-item-controls mt-2">
                <button className="cart-btn cart-btn-decrease" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button className="cart-btn cart-btn-increase" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="cart-btn cart-btn-remove" onClick={() => updateQuantity(item.id, 0)}>🗑️</button>
            </div>
        </li>
    ))}
</ul>



            )}
            {cartItems.length > 0 && (
                <button className="btn btn-success mt-3 w-100" onClick={clearCart}>
                    Buy Now
                </button>
            )}
            <h4 className="mt-3"><strong>Total: ₹</strong>{totalPrice.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
