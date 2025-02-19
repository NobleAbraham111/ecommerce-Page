import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './components/Cart.css';
import './components/ProductCard.css';
import Footer from "./components/Footer";



import productsData from './data/products.json';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(true);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0) 
    );
  };

  const clearCart = () => {
    alert("Purchase successful! Thank you for your order.");
    setCart([]); 
  };

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
      <div className="container mt-4">
        {showCartPopup && (

          <div className="alert alert-info" onClick={() => setShowCartPopup(false)}>
            Click the 🛒 cart icon to view your cart!

          </div>

        )}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="row">
          <ProductList
            products={products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))}
            addToCart={addToCart}
          />
        </div>
      </div>
      {showCart && <Cart cartItems={cart} updateQuantity={updateQuantity} clearCart={clearCart} />}
      <Footer />
    </div>

  );
};

export default App;
