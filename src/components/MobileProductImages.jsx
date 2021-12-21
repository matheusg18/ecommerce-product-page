import React, { useState } from 'react';

function MobileProductImages() {
  const [imageIndex, setImageIndex] = useState(1);
  const MAX_INDEX = 4;
  const MIN_INDEX = 1;

  const handleNextImageClick = () => {
    if (imageIndex >= MAX_INDEX) {
      setImageIndex(MIN_INDEX);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handlePrevImageClick = () => {
    if (imageIndex <= MIN_INDEX) {
      setImageIndex(MAX_INDEX);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="product-images-mobile">
      <button className="prev-button" type="button" onClick={handlePrevImageClick}>
        <img src="images/icon-previous.svg" alt="previous product view" />
      </button>
      <img src={`images/image-product-${imageIndex}.jpg`} alt="product view" />
      <button className="next-button" type="button" onClick={handleNextImageClick}>
        <img src="images/icon-next.svg" alt="next product view" />
      </button>
    </section>
  );
}

export default MobileProductImages;
