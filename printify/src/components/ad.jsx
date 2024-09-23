// import React from 'react'

// import TalkToSales from '../assets/images/talk-to-sales-N2GDBAGC.svg'

// function ad() {
//     return (
//         <div className='grid grid-cols-2 w-[1100px] h-32 m-20 rounded-xl 
//     bg-green-100'>
//             <p className='justify-items-center items-center p-10 text-2xl
//         font-bold text-green-800 ml-16
//         '>Are you a large business looking for custom solutions?</p>
//             <img
//                 className='ml-36 grid justify-end items-end rounded-xl h-32 '
//                 src={TalkToSales} alt="talk-to-sales-N2GDBAGC.svg" />

//             <button className='mt-0 border-black border-2'>
//                 Talk To Sales
//             </button>
//         </div>
//     )
// }

// export default ad

import React from 'react';
import TalkToSales from '../assets/images/talk-to-sales-N2GDBAGC.svg';

function Ad() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 w-full max-w-[1100px] h-auto 
    lg:h-32 m-10 p-5 rounded-xl bg-green-100'>

      <p className='flex justify-center items-center text-2xl font-bold text-green-800 
      lg:ml-16 text-center lg:text-left'>
        Are you a large business looking for custom solutions?
      </p>

      <div className='relative flex justify-center items-center lg:ml-0'>

        <img
          className='w-full h-24 object-cover rounded-xl'
          src={TalkToSales}
          alt="talk-to-sales-N2GDBAGC.svg"
        />

        <button className='absolute bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'>
          Talk To Sales
        </button>
      </div>
    </div>
  );
}

export default Ad;
