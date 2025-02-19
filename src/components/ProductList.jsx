import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </>
  );
};

export default ProductList;
