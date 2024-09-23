import React, { useState } from 'react';

const review = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const cards = [
        {
            id: 1,
            name: 'John Doe',
            profession: 'Entrepreneur',
            description: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
            photo: 'https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png',
        },
        {
            id: 2,
            name: 'Jane Smith',
            profession: 'Designer',
            description: 'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top notch, and their platform just keeps getting better and better.',
            photo: 'https://printify.com/pfh/media/nikki-TJP4NANB.png',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            profession: 'Software Engineer',
            description: 'Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it \'s truly made the whole process a breeze.',
            photo: 'https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png',
        },
    ];

    const posts = [
        {
            id: 1,
            title: '',
            href: '#',
            description:
                ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
            author: {
                name: 'Rober A.Voltaire',
                role: 'Store Link',
                imageUrl:
                    'https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png',
            },
        },
        {
            id: 2,
            description:
                ' We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top notch, and their platform just keeps getting better and better.',

            author: {
                name: 'Quinten Barney',
                role: 'Etsy Merchant',
                imageUrl:
                   'https://printify.com/pfh/media/nikki-TJP4NANB.png',
            },
        },
        {
            id: 3,
            description:
                ' Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it \'s truly made the whole process a breeze. ',
            author: {
                name: 'Nikki',
                role: 'Store Link',
                href: '#',
                imageUrl:
                    'https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png',
            },
        },

    ]

    const handleNext = () => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <>
            <div className="flex flex-col lg:flex justify-center items-center 
            px-4 py-8 space-y-8 lg:space-y-0 lg:space-x-8 bg-gray-100 sm:hidden">

                <div className="w-[50%] lg:w-1/2 flex flex-col lg:flex-row justify-between 
                space-y-4 items-center lg:space-y-0 lg:space-x-4 mt-12 sm:hidden">

                    <div className=" text-center p-4 rounded-lg w-[800px] text-3xl font-bold sm:hidden">
                        Trusted by over 8M sellers around the world
                    </div>

                    <div className="text-center rounded-lg w-[500px] text-gray-700 sm:hidden">
                        Whether you are just getting started or run an enterprise-level e-commerce business,
                        we do everything we can to ensure a positive merchant experience.
                    </div>

                </div>

                <div className="w-[70%] lg:hidden flex flex-col lg:flex-row items-center m-32 sm:hidden">

                    <div className="relative w-full">

                        <div className="bg-white p-6 rounded-lg shadow-lg flex space-x-4 ">
                            <img
                                src={cards[currentCard].photo}
                                alt="Author"
                                className="w-20 h-20 object-cover"
                            />

                            <div>
                                <p className="text-lg font-bold">{cards[currentCard].name}</p>
                                <p className="text-gray-600">{cards[currentCard].profession}</p>
                                <div className="bg-gray-100 p-2 mt-8 rounded-lg ">
                                    <p>{cards[currentCard].description}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 
                            bg-gray-200 p-2 rounded-full"
                        >
                            &lt;
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 
                            bg-gray-200 p-2 rounded-full"
                        >
                            &gt;
                        </button>

                    </div>

                </div>

            </div>

            <div className='bg-gray-100 h-[600px] grid grid-rows-12 md:block'>

                <div className='row-span-5 text-[#485256] hidden md:block'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4 text-[40px] font-bold ml-20'>
                            Trusted by over 8M sellers around the world
                        </div>

                        <div className='m-20 w-96 col-span-3 flex justify-center items-center '>
                            Whether you are just getting started or run an enterprise-level
                            e-commerce business, we do everything we can to ensure a
                            positive merchant experience.
                        </div>

                    </div>
                </div>

                <div className='row-span-7 hidden md:block'>
                    <div className="py-24 sm:py-2">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                        border-t pt-10 sm:mt-1 sm:pt-2 lg:ml-10 lg:max-w-none 
                        lg:grid-cols-3">
                                {posts.map((post) => (
                                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                        <div className="relative  flex items-center gap-x-4">
                                            <img alt="" src={post.author.imageUrl}
                                                className="h-20 rounded-full bg-gray-50" />

                                            <div className="text-sm leading-6">
                                                <p className="font-bold text-gray-900 text-[21px]">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-[#29ab51]">{post.author.role}</p>
                                            </div>
                                        </div>

                                        <div className="group relative">

                                            <p className="mt-5 text-sm leading-6 w-[250px]">
                                                {post.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default review;