import React, { useEffect, useState } from 'react';
import Header from '../sections/Header';
import Hero from './../sections/BlogDetails/Hero';
import Heading from '../components/Heading';
import HeadingLine from './../components/HeadingLine';
import Footer from './../sections/Footer';
import { Link, useLocation } from 'react-router-dom';
import blogs from '../sections/Blogs/data';

function BlogDetails() {

    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = blogs[index];

    // Extract the first 5 blogs for Recent Blogs section
    const itemsToDisplay = blogs.slice(0, 5);

    // Table of Contents items
    const [tocItems, setTocItems] = useState([]);

    useEffect(() => {
        if (data.description) {
            // Extract headings (h2) from the description passed via location.state
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.description, 'text/html');
            const headings = Array.from(doc.querySelectorAll('h2')).map((heading) => ({
                id: heading.id || heading.textContent.replace(/\s+/g, '-').toLowerCase(), // Generate id if not present
                text: heading.textContent,
            }));

            setTocItems(headings);
        }
    }, [data.description]);

    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <Hero title={data.title} />
            <div className="w-full container mx-auto flex flex-col justify-center items-center p-10">
                <Heading data="BLOG TITLE" />
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 mt-5">
                    <div className="w-full md:w-3/4 flex flex-col justify-center items-start">
                        <img src={`./assets/blogs/${data.image}`} alt="" className="w-full" />

                        {/* Render Blog Content */}
                        <div className="mt-10">
                            <div
                                className="article-content"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                        </div>
                    </div>

                    {/* Sidebar with TOC and Recent Blogs */}
                    <div className="w-full md:w-1/5 hidden md:flex flex-col justify-between items-center gap-4">
                        {/* Table of Contents Section */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                            <HeadingLine data="Table of Contents" />
                            <ul className="list-disc list-inside space-y-2">
                                {tocItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={`#${item.id}`} className="text-secondary hover:underline">
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Blogs Section */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                            <HeadingLine data="Recent Blogs" />
                            {itemsToDisplay.map((item, index) => (
                                <Link to={`/blogdetails?index=${item.id}`}>
                                    <div className="w-full p-2 flex flex-row justify-start items-center gap-4">
                                        <img src={`./assets/blogs/${item.image}`} alt="" className="w-28" />
                                        <p className="text-secondary text-xs font-semibold underline">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Contact Us Section */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                            <HeadingLine data="Contact Us" />
                            <form className="w-full flex flex-col justify-between items-center gap-3">
                                <div className="w-full flex flex-col justify-between items-center text-black gap-3">
                                    <select className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary">
                                        <option selected>Choose a Provider</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                                        placeholder="Full Name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                                        placeholder="Phone Number"
                                        required
                                    />
                                    <input
                                        type="email"
                                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                                        placeholder="Email"
                                        required
                                    />
                                    <select className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary">
                                        <option selected>Select State</option>
                                    </select>
                                    <select className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary">
                                        <option selected>Service Type</option>
                                    </select>
                                    <textarea
                                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                                        placeholder="Describe your message here..."
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="submit"
                                        className="px-3 py-2 rounded-2xl w-full bg-primary text-white"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetails;
