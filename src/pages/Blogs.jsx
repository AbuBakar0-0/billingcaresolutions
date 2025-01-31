import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Blogs/Hero';
import Heading from './../components/Heading';
import { supabase } from './../lib/supabase';
import Header from './../sections/Header';

function Blogs() {
    const [data, setData] = useState([]); // Store blogs data
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const blogsPerPage = 9;
    const [error, setError] = useState();
    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            try {
                const { data, error } = await supabase.from("blogs").select("*").order("date", { ascending: false });;
                if (error) throw error;
                setData(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError(err.message || "An error occurred while fetching blogs.");
            } finally {
                setIsLoading(false);
            }
        };



        fetchBlogs();
        window.scrollTo(0, 0); // Scroll to the top
    }, []);

    // Calculate total pages and the current blogs to display after data is fetched
    const totalBlogs = data.length;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header />
            <Hero />
            <Heading data={"Latest Blogs"} />

            {/* Loader */}
            {isLoading ? (
                <div className="w-full flex justify-center items-center h-96">
                    <div className="loader"></div> {/* You can replace this with any loader UI */}
                </div>
            ) : (
                <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                    {currentBlogs.map((item, index) => (
                        <Link to={`/blogdetails/${item.id}`} key={index} className='w-full md:w-[48%] lg:w-[30%] p-5'>
                            <div className=' lg:min-h-[30rem] rounded-lg shadow-lg flex flex-col justify-start items-center'>
                                <img src={`${item.image}`} alt="Billing Care Solutions" className='rounded-t-lg' />
                                <div className='w-full p-4 flex flex-col'>
                                    <p className='w-full text-lg font-custom font-semibold text-secondary h-16'>{item.title}</p>
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
                                        <p>{new Date(item.date).toLocaleDateString('en-US')}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {!isLoading && (
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
            )}
        </>
    );
}

export default Blogs;
