import React from 'react';

function AddToCartButton({ onAddToCart }) {
  return (
    <button className='btn bg-primary' style={{ color: 'white' }} onClick={onAddToCart}>
      ADD TO CART
    </button>
  );
}

export default AddToCartButton;