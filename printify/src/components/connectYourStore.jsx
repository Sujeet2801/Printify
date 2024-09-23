// import React from 'react'
// import Line from '../assets/images/stores-background-QSGENTOX.svg'

// function connectYourStore() {
//     return (
//         <div className='w-[1024] grid justify-items-center mt-16'>
//             <div className='text-3xl font-bold mb-5'>
//                 Connect your store
//             </div>

//             <p>Printify easily integrates with major e-commerce platforms and marketplaces
//             </p>

//             <img src={Line} alt="stores-background" />

//         </div>
//     )
// }

// export default connectYourStore

import React, { useEffect, useState } from 'react';
import Line from '../assets/images/stores-background-QSGENTOX.svg';

import Photo1 from '../assets/images/big-commerce-EGSGKPYX.svg';
import Photo2 from '../assets/images/wix-MWZCZDTE.svg';
import Photo3 from '../assets/images/presta-54F6AYUU.svg'; 
import Photo4 from '../assets/images/small-logo.png';
import Photo5 from '../assets/images/shopify-3NAPXPBF.svg';
import Photo6 from '../assets/images/squarespace-FIBF2RIF.svg';
import Photo7 from '../assets/images/etsy-MXXFYORZ.svg';
import Photo8 from '../assets/images/more-integration-4S3FHLQZ.svg'; 
import Photo9 from '../assets/images/star-S46SZESO.svg';
import Photo10 from '../assets/images/woo-PGFAG65X.svg';

function ConnectYourStore() {
  const [showImages, setShowImages] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const lineTimer = setTimeout(() => {
      setShowLine(true);
    }, 1000);

    const imageTimer = setTimeout(() => {
      setShowImages(true);
    }, 3000);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  // Array of images with unique positions
  const imageDetails = [
    { src: Photo1, style: { top: '5%', left: '35%' } },
    { src: Photo2, style: { top: '1%', right: '0%' } },
    { src: Photo3, style: { top: '30%', left: '25%' } },
    { src: Photo4, 
      style: { top: '35%', right: '41%'} },
    { src: Photo5, style: { top: '78%', left: '54%' } },
    { src: Photo6, style: { top: '10%', right: '28%' } },
    { src: Photo7, style: { top: '70%', left: '90%' } },
    { src: Photo8, style: { top: '65%', right: '52%', height: '90px' } },
    { src: Photo9, style: { top: '60%', left: '10%' } },
    { src: Photo10, style: { top: '40%', right: '15%' } },
  ];

  return (
    <div className='w-full max-w-[1024px] grid justify-items-center mt-16 px-4'>
      <div className='text-5xl font-bold mb-8 text-center ml-40'>
        Connect your store
      </div>

      <p className='text-center mb-8 ml-40'>
        Printify easily integrates with major e-commerce platforms and marketplaces.
      </p>

      <div className='relative w-full mt-8'>
        {/* Line Background Image with transition */}
        <img
          src={Line}
          alt="stores-background"
          className={`w-full h-auto transition-opacity duration-2000 ${showLine ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Overlayed Boxes with Photos positioned using absolute */}
        {imageDetails.map((imageDetail, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-1000 
              ${showImages ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} 
              shadow-lg rounded-md p-2 bg-white`}
            style={{
              width: '90px',
              ...imageDetail.style
            }}
          >
            <img
              src={imageDetail.src}
              alt={`Photo ${index + 1}`}
              className={`w-full h-full rounded-md transition-opacity duration-1000 
                hover:scale-110 ${showImages ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectYourStore;
