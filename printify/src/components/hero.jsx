import React, { useEffect, useState } from 'react';
import Photo2 from '../assets/animations/images/img_2.png'
import Photo3 from '../assets/animations/images/img_3.png'
import Photo4 from '../assets/animations/images/img_4.png'

const hero = () => {

  const [activeImage, setActiveImage] = useState(0);
  const images = [
    Photo2,
    Photo3,
    Photo4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-48 flex flex-col lg:flex-row lg:space-x-8 sm:flex-col items-start 
    justify-start px-4 py-8 mb-48">
 
      <div className="flex flex-col lg:w-[40%] w-[60%] space-y-8 md:ml-16">

        <div className="text-gray-800">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold">
            Create and sell custom products
          </h1>
        </div>


        <div className="text-lg text-gray-600">
          <p>
            100% Free to use <br />
            900+ High-Quality Products <br />
            Largest global print network
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
            Start for Free
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400">
            How it Works
          </button>
        </div>


        <div className="text-lg text-green-600">
          <p>Trusted by over 8M sellers around the world</p>
        </div>
      </div>


<div className="relative lg:w-1/2 w-full mt-8 lg:mt-0 ml-0">

      <img
        src="https://printify.com/pfh/assets/animations/images/img_5.png"
        alt="Product"
        className="w-full h-auto object-cover lg:block md:w-[300px] sm:hidden"
      />

      <div className="absolute inset-0 flex ml-24 items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pop Image ${index + 1}`}
            className={`w-28 h-20 absolute transition-transform duration-300 ${
              activeImage === index ? 'scale-100' : 'scale-0'
            }`}
            style={{ animationDelay: `${index}s` }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default hero;
