import React, { useEffect, useState } from 'react';
import Header from './../sections/Header';
import Heading from './../components/Heading';
import { Link } from 'react-router-dom';
import Hero from './../sections/Articles/Hero';
import articles from '../sections/Articles/data';
import { Helmet } from 'react-helmet';

function Articles() {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 9;
    const totalArticles = articles.length;
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticle = articles.slice(indexOfFirstArticle, indexOfLastArticle);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Helmet>
                <title>Articles - Billing Care Solutions</title>
                <meta name="description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
                <meta property="og:title" content="Articles - Billing Care Solutions" />
                <meta property="og:description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
            <Header />
            <Hero />
            <Heading data={"Latest Articles"} />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {currentArticle.map((item, index) => (
                    <Link to={`/articleDetails?index=${item.id}`} key={index}>
                        <div className='w-96 min-h-[31rem] rounded-lg shadow-lg flex flex-col justify-start items-center'>
                            <img  src={`${item.image}`} alt="Billing Care Solutions" className='rounded-t-lg min-h-[18rem]' />
                            <div className='w-full p-4 flex flex-col'>
                                <p className='w-full text-md font-custom font-semibold text-secondary h-20'>{item.title}</p>
                                <div
                                    className="overflow-hidden h-12"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                                <p className='w-full text-primary font-semibold'>Explore More</p>
                            </div>
                            <div className='w-[95%] h-[1px] bg-secondary mx-4'></div>
                            <div className='w-full flex flex-row justify-between items-center gap-4 p-4 text-xs text-gray-700'>
                                <p>Billing Care Solutions</p>
                                <div className='flex flex-row justify-center items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className='w-full flex justify-center my-8'>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-4 py-2 mx-2 bg-primary text-white rounded disabled:opacity-50'
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((num) => (
                    <button
                        key={num + 1}
                        onClick={() => paginate(num + 1)}
                        className={`px-4 py-2 mx-2 ${currentPage === num + 1 ? 'bg-secondary' : 'bg-primary'} text-white rounded`}
                    >
                        {num + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 mx-2 bg-primary text-white rounded disabled:opacity-50'
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default Articles;
