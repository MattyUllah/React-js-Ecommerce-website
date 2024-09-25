import React from 'react';

function BuyNowButton({ onBuyNow }) {
  return (
    <button className='btn bg-primary' style={{ color: 'white' }} onClick={onBuyNow}>
      BUY NOW
    </button>
  );
}

export default BuyNowButton;