import React from 'react'
import HigherProfit from '../assets/images/higher-profits.svg'
import Best from '../assets/images/best-selection.svg'
import Robust from '../assets/images/robust-scaling.svg'

function card2() {
  return (
    <div className='w-full flex sm:justify-evenly text-start items-start h-auto mb-40'>

        <div className='w-46 flex flex-col items-start ml-3'>
            <img className='w-32' src={HigherProfit} alt="" />
            <p className='font-bold text-[27px] mt-5 '>Higher Profits</p>
            <p className='md:w-72 w-auto mt-5 h-auto'>We offer some of the lowest 
            prices in the industry because print provides continuously compete to win your business.</p>
        </div>

        <div className='w-46 flex flex-col items-start ml-3'>
            <img className='w-32' src={Best} alt="" />
            <p className='font-bold text-[27px] mt-5 '>Robust Scaling</p>
            <p className=' md:w-72 w-auto mt-5'>Easily handle peak holiday seasons,
                with our wide network of partners and automatic routing functionality.</p>
        </div>

        <div className='w-46 flex flex-col items-start ml-3'>
            <img className='w-32' src={Robust} alt="" />
            <p className='font-bold text-[27px] mt-5 '>Best Selection</p>
            <p className='md:w-72 h-auto mt-5'>With 900+ products and top quality brands, 
                you can choose the best products for your business..</p>
        </div>
    </div>
  )
}

export default card2