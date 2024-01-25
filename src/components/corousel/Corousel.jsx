import { useState, useEffect } from 'react';
import './Corousel.scss';

const Corousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(['img/dogecoin.webp', 'img/paypal.webp']); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="accepted">
      <h2>Accepted payments</h2>
      <img src={images[imageIndex]} alt="" loading="lazy" />
    </div>
  );
};

export default Corousel;
