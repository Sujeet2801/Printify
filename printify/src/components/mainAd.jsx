import React from 'react'
import Check from '../assets/images/check.png'

function mainAd() {
    return (
        <div className='mt-[150px] grid grid-cols-12 ml-10 h-[500px]'>
            <div className='md:col-span-5 '>
                <div>
                    <div className='h-[210px] md:text-[51px] text-[32px] p-10 font-bold text-[#17262b]'>
                        Create and sell custom products
                    </div>

                    <div className='h-[90px] ml-12'>
                        <div className='grid grid-cols-12'>
                            <img className='w-6 col-span-1' src={Check} alt="" />
                            <p className='col-span-11'>100% Free to use</p>
                        </div>
                        <div className='grid grid-cols-12'>
                            <img className='w-6 col-span-1' src={Check} alt="" />
                            <p className='col-span-11'>900+ High-Quality Products</p>
                        </div>
                        <div className='grid grid-cols-12'>
                            <img className='w-6 col-span-1' src={Check} alt="" />
                            <p className='col-span-11'>Largest global print network</p>
                        </div>
                    </div>

                    <div className='h-[60px] ml-12'>
                        <button className='bg-green-500 w-36 p-2 text-white'>
                            Start for free
                        </button>

                        <button className='w-36 p-2 border-2 ml-5'>
                            How it works
                        </button>
                    </div>
                    <div className='text-green-800 ml-12 font-bold'>
                        Trusted by over 8M sellers around the world
                    </div>
                </div>
            </div>
            <div className='col-span-7'>
                Box2
            </div>
        </div>
    )
}

export default mainAd