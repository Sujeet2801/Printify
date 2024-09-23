import React from 'react'
import CustomProduct from '../assets/images/custom-products.png'
import Fullfillment from '../assets/images/fullfillment.png'
import YourProducts from '../assets/images/your-products.png'

function createSellHandle() {
  return (
    <div className='bg-gray-100 w-full flex sm:justify-evenly text-start items-start 
    h-[600px]'>

        <div className='w-46 flex flex-col items-start ml-3  mt-28'>
            <img className='w-32' src={CustomProduct} alt="" />
            <p className='font-bold text-[18px] mt-8 text-green-600 mb-0'>CREATE</p>
            <p className='font-bold text-[24px] '>custom products</p>
            <p className='md:w-72 w-auto mt-6 h-auto'>Easily add your designs to 
              a wide range 
              of products using our free tools</p>
        </div>

        <div className='w-46 flex flex-col items-start ml-3 mt-28'>
            <img className='w-32' src={Fullfillment} alt="" />
            <p className='font-bold text-[18px] mt-8 text-green-600 mb-0'>SELL</p>
            <p className='font-bold text-[24px] '>on your terms</p>
            <p className=' md:w-72 w-auto mt-5'>You choose the products, sale price, 
              and where to sell</p>
        </div>

        <div className='w-46 flex flex-col items-start ml-3 mt-28'>
            <img className='w-32' src={YourProducts} alt="" />
            <p className='font-bold text-[18px] mt-8 text-green-600 mb-0'>WE HANDLE</p>
            <p className='font-bold text-[24px] '>fullfillment</p>
            <p className='md:w-72 h-auto mt-5'>With 900+ products and top quality brands, 
                you can choose the best products for your business..</p>
        </div>
    </div>
  )
}

export default createSellHandle