import React, { useState, useEffect } from 'react';
import '../TopWriterSection/Topwriter.css';
const images = [
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    "https://img.daisyui.com/images/stock/photo-1520734095434-4d5b09a0e2c2.jpg",
    "https://img.daisyui.com/images/stock/photo-1519125323398-675f0ddb6308.jpg",
    "https://img.daisyui.com/images/stock/photo-1506748686214-e9df14d4d9d0.jpg",
    "https://img.daisyui.com/images/stock/photo-1476611338391-6f395a0ebc9d.jpg",
    "https://img.daisyui.com/images/stock/photo-1515376721779-7db6951da88d.jpg",
    "https://img.daisyui.com/images/stock/photo-1521747116042-5a810fda9664.jpg"
  ];
  
  const Topwriter = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds
      return () => clearInterval(interval);
    }, []);
  
    const currentImages = [
      ...images.slice(index, index + 5),
      ...images.slice(0, Math.max(0, index + 4 - images.length))
    ];
  
    return (
      <div className='slider'>
        {currentImages.map((src, idx) => (
          <div className="avatar" key={idx}>
            <div className="w-24 rounded-full transition-opacity duration-1000">
              <img src={src} alt={`Avatar ${idx}`} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Topwriter;