import React from 'react'

function footer() {
    return (
        <div className=' bg-gray-100 h-[150px] grid text-[13px] mt-10'>
            <div className='mt-10 flex justify-center items-center gap-10 text-[#949494]'>
                <p>Intellectual Property Policy</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Security</p>
            </div>
            <div className='flex justify-center'>
                © 2024 Printify, Inc. All rights reserved.
            </div>
        </div>

    )
}

export default footer