import React from 'react'
import Logo from '../assets/images/logo.svg'

function socialMedia() {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <img className='w-32 h-32 ml-10' src={Logo} alt="logo" />
            </div>

            <div className='flex justify-end items-center gap-5 mr-5'>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg" alt="" />
                </a>
                <a href="">
                    <img src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default socialMedia