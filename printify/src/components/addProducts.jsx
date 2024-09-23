import React from 'react';
import Main from '../assets/images/all-product1.png'
function ProductDesignSection() {

  return (
    <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100">

      <div className="flex flex-wrap justify-center items-center p-7">
        <img src={Main} alt="" />
      </div>

      <div className="space-y-8 flex-col justify-center items-center mt-48 ml-2">
  
        <div className="text-3xl font-bold ">
          Easily add your design to a wide range of products
        </div>


        <div className="text-base text-gray-700">
          With our free design tools, you can easily add your custom designs to t-shirts, 
          mugs, phone cases, and hundreds of other products.
        </div>

        <div>

          <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-md 
          hover:bg-green-700 transition">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDesignSection;
