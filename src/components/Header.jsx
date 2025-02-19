import React from 'react';
import './Header.css';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-5">
      <a className="navbar-brand" href="#">Laxury Furnishing</a>
      <div>
        <button className="btn btn-light position-relative" onClick={toggleCart}>🛒 My Cart
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
