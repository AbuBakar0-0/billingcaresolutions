import React from 'react'
import Header from './../sections/Header';
import Hero from '../sections/Blogs/Hero';
import Heading from './../components/Heading';
import { Link } from 'react-router-dom';
import data from '../sections/Blogs/data';

function Blogs() {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <Hero />
            <Heading data={"Latest Blogs"} />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item, index) => (
                    <>
                        <Link to={`/blogdetails?index=${item.id}`} >
                            <div className='w-96 min-h-[26rem] rounded-lg shadow-lg flex flex-col justify-start items-center '>
                                <img src={`./assets/blogs/${item.image}`} alt="" className='rounded-t-lg' />
                                <div className='w-full p-4 flex flex-col gap-4'>
                                    <p className='w-full text-lg font-custom font-semibold text-secondary'>{item.title}</p>
                                    <div
                                        className="overflow-hidden h-12"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                    <a href='#' className='w-full text-primary font-semibold'>Explore More</a>
                                </div>
                                <div className='w-[95%] h-[1px] bg-secondary mx-4'></div>
                                <div className='w-full flex flex-row justify-between items-center gap-4 p-4 text-sm text-gray-700'>
                                    <p>Billing Care Solutions</p>
                                    <div className='flex flex-row justify-center items-center gap-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>
                                        <p>2024/09/24</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                ))}

            </div >
        </>
    )
}

export default Blogs