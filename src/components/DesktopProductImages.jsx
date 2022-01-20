import React, { useState } from 'react';

function DesktopProductImages() {
  const [mainImageIndex, setmainImageIndex] = useState(1);

  return (
    <section className="product-images-desktop">
      <img
        className="desktop-main-image"
        src={`images/image-product-${mainImageIndex}.jpg`}
        alt="Product main"
      />
      <div className="desktop-thumbnails">
        <div className={`${mainImageIndex === 1 ? "frame-active " : ""}thumbnail-frame`}>
          <img
            className={mainImageIndex === 1 ? "thumbnail-active" : null}
            src="images/image-product-1-thumbnail.jpg"
            alt="Product thumbnail"
            onClick={() => setmainImageIndex(1)}
          />
        </div>
        <div className={`${mainImageIndex === 2 ? "frame-active " : ""}thumbnail-frame`}>
          <img
            className={mainImageIndex === 2 ? "thumbnail-active" : null}
            src="images/image-product-2-thumbnail.jpg"
            alt="Product thumbnail"
            onClick={() => setmainImageIndex(2)}
          />
        </div>
        <div className={`${mainImageIndex === 3 ? "frame-active " : ""}thumbnail-frame`}>
          <img
            className={mainImageIndex === 3 ? "thumbnail-active" : null}
            src="images/image-product-3-thumbnail.jpg"
            alt="Product thumbnail"
            onClick={() => setmainImageIndex(3)}
          />
        </div>
        <div className={`${mainImageIndex === 4 ? "frame-active " : ""}thumbnail-frame`}>
          <img
            className={mainImageIndex === 4 ? "thumbnail-active" : null}
            src="images/image-product-4-thumbnail.jpg"
            alt="Product thumbnail"
            onClick={() => setmainImageIndex(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default DesktopProductImages;
