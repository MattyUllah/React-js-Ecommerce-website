import React from 'react';

function ExampleCarouselImage({ imageSrc, text }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imageSrc} alt={text} style={{ width: '80%', height: '500px' }} />
      
    </div>
  );
}

export default ExampleCarouselImage;
