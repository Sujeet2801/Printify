import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
function header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    return (
        <div>
            <nav className='w-full h-20 flex justify-between px-3 
            items-center fixed top-0 right-0 left-0 bg-white border-gray-100
            border-2 z-50 cursor-pointer'>

                <div>
                    <img className='w-[135px] h-[50px]' src={logo} alt="logo" />
                </div>

                <ul className=' custom-md:flex hidden'>
                    <li className='mx-6 cursor-pointer'>Catalog</li>

                    <div className="relative inline-block text-left">
                        
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex items-center cursor-pointer space-x-1"
                        >
                            <span className="text-gray-800 hover:text-green-600">How it Works</span>
                           
                            <svg
                                className={`w-4 h-4 mt-1 transition-transform transform ${isHovered ? 
                                'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>

                        {isHovered && (
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="absolute w-56 rounded-md shadow-lg 
                                bg-white ring-1 ring-black ring-opacity-5 z-20"
                            >
                                <div className="py-1">
                                    <a
                                        href="#option1"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        How Printify Works

                                    </a>
                                    <a
                                        href="#option2"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Print On Demand
                                    </a>
                                    <a
                                        href="#option3"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Printify Quality Promise
                                    </a>
                                    <a
                                        href="#option4"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        What to Sell?
                                    </a>

                                </div>
                            </div>
                        )}
                    </div>

                    <li className='mx-6 cursor-pointer'>Pricing</li>
                    <li className='mx-6 cursor-pointer'>Blog</li>
                    
                    <div className="relative inline-block text-left">
                        
                        <div
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            className="flex items-center cursor-pointer space-x-1"
                        >
                            <span className="text-gray-800 hover:text-green-600">Services</span>
                           
                            <svg
                                className={`w-4 h-4 mt-1 transition-transform transform ${isHovered1 ? 
                                'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>

                        {isHovered1 && (
                            <div
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                                className="absolute w-56 rounded-md shadow-lg 
                                bg-white ring-1 ring-black ring-opacity-5 z-20"
                            >
                                <div className="py-1">
                                    <a
                                        href="#option1"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Printify Studio

                                    </a>
                                    <a
                                        href="#option2"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Printify Express Delivery
                                    </a>
                                    <a
                                        href="#option3"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Transfer Products
                                    </a>
                                    <a
                                        href="#option4"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Order In Bulk
                                    </a>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className="ml-5 relative inline-block text-left">
                        
                        <div
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            className="flex items-center cursor-pointer space-x-1"
                        >
                            <span className="text-gray-800 hover:text-green-600">Use Cases</span>
                           
                            <svg
                                className={`w-4 h-4 mt-1 transition-transform transform ${isHovered2 ? 
                                'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>

                        {isHovered2 && (
                            <div
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                className="absolute w-56 rounded-md shadow-lg 
                                bg-white ring-1 ring-black ring-opacity-5 z-20"
                            >
                                <div className="py-1">
                                    <a
                                        href="#option1"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Merch for Fans
                                    </a>
                                    <a
                                        href="#option2"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Merch for eCommerce
                                    </a>
                                    <a
                                        href="#option3"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Merch for Enterprises
                                    </a>
                                    <a
                                        href="#option4"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Grow Your Store
                                    </a>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className="ml-5 relative inline-block text-left">
                        
                        <div
                            onMouseEnter={() => setIsHovered3(true)}
                            onMouseLeave={() => setIsHovered3(false)}
                            className="flex items-center cursor-pointer space-x-1"
                        >
                            <span className="text-gray-800 hover:text-green-600">Need Help?</span>
                           
                            <svg
                                className={`w-4 h-4 mt-1 transition-transform transform ${isHovered3 ? 
                                'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>

                        {isHovered3 && (
                            <div
                                onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)}
                                className="absolute w-40 rounded-md shadow-lg 
                                bg-white ring-1 ring-black ring-opacity-5 z-20"
                            >
                                <div className="py-1">
                                    <a
                                        href="#option1"
                                        className="block px-4 py-2 text-gray-900 hover:text-green-600 "
                                    >
                                        Help Center
                                    </a>
                                    <a
                                        href="#option2"
                                        className="block px-4 py-2 text-gray-700 hover:text-green-600 "
                                    >
                                        Contacts
                                    </a>
                                    

                                </div>
                            </div>
                        )}
                    </div>
                    
                </ul>

                <div className='flex '>
                    <div className='mx-2 font-semibold border-gray-300 border-2 
                    w-24 text-center p-1 cursor-pointer hover:text-green-700'>
                        Login
                    </div>

                    <div className='mx-6 font-semibold 
                    w-24 text-center p-1 bg-green-600 text-white cursor-pointer hover:bg-green-700'>
                        Signup
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default header