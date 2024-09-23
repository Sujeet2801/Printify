import React from 'react'
import MoneyPhoto from '../assets/images/moneyphoto.png'

function makeMoney() {
  return (
    <div className='bg-[#203741] mx-44 my-20 h-[700px] rounded-3xl grid grid-cols-2'>
      <div className='text-white col-span-1 m-16 p-1'>
        <p className='font-bold text-[40px]'>Make Money, Risk Free</p>
        <p className='mt-5 pr-5'>You pay for fulfillment only when you make a sale</p>

        <div className='bg-[#17262b] h-50 mt-10 rounded-xl p-8 flex flex-col'>

          <span className='mb-6'> You sell a t-shirt <span className='ml-24'>$ 30</span> </span>
          <span className='mb-6'>You pay for its production <span className='ml-6'>$ 12</span></span> 
          
          <hr className='mb-6'/>

          <span className='font-bold mb-2 text-green-600 text-xl'>Your profit 
            <span className='ml-24'>$ 18</span> 
          </span> 

        </div>
        <button className='mt-5 ml-20 bg-green-500 w-32 p-2 font-bold '>Start Selling</button>
        <p className='mt-5 '>100% Free to use · 900+ Products · Largest print network</p>
      </div>
      <div className='col-span-1 mt-[150px]'>
          <img className='h-[550px] ml-16 rounded-xl' src={MoneyPhoto} alt="MoneyPhoto" />
      </div>
    </div>
  )
}

export default makeMoney