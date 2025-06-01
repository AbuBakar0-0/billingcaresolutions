import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import { supabase } from '../lib/supabase';
import Header from '../sections/Header';
import HeadingLine from './../components/HeadingLine';
import Footer from './../sections/Footer';

function BlogDetails() {
    const { id:title } = useParams();
    const [blog, setBlog] = useState({});
    const [data, setData] = useState([]);
    const [tocItems, setTocItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const { data: blogData, error: blogError } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('title', title);

                if (blogError) throw blogError;

                if (blogData.length > 0) {
                    setBlog(blogData[0]);
                } else {
                    console.warn('No blog found with the provided ID');
                }

                const { data } = await supabase
                    .from('blogs')
                    .select('*');

                setData(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        };

        fetchBlogs();
    }, [title]);

    useEffect(() => {
        if (blog.description) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(blog.description, 'text/html');
            const headings = Array.from(doc.querySelectorAll('h2'))
                .filter((heading) => heading.textContent.trim() !== '')
                .map((heading) => {
                    const id = heading.id || heading.textContent.replace(/\s+/g, '-').toLowerCase();
                    heading.id = id; // Add the id to the heading
                    return {
                        id,
                        text: heading.textContent,
                    };
                });

            setTocItems(headings);
        }
    }, [blog.description]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const itemsToDisplay = data.slice(0, 5);

    return (
        <>
            <Header />
            {loading ?
                <div className="w-full flex justify-center items-center h-96">
                    <div className="loader"></div> {/* You can replace this with any loader UI */}
                </div>
                :
                <div className="w-full container mx-auto flex flex-col justify-center items-center p-10 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight">
                    <div className="w-full flex flex-row justify-center items-center space-x-3 text-primary font-custom text-2xl md:text-4xl font-medium p-4">
                        <div className="bg-secondary w-[3rem] h-[0.3rem] rounded-full"></div>
                        <p className="text-center md:text-left font-custom">{blog.title}</p>
                        <div className="bg-secondary w-[3rem] h-[0.3rem] rounded-full"></div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 mt-5">
                        <div className="w-full md:w-3/4 flex flex-col justify-center items-start">
                            <img src={`${blog.image}`} alt="Billing Care Solutions" className="w-full" />
                            <div
                                className="article-content mt-10 leading-8"
                                dangerouslySetInnerHTML={{ __html: blog.description }}
                            />
                        </div>
                        <div className="w-full md:w-1/5 hidden md:flex flex-col justify-between items-center gap-4">
                            <div className="w-full flex flex-col justify-start gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                                <HeadingLine data="Table of Contents" />
                                <ul className="list-disc list-inside space-y-2 text-left">
                                    {tocItems.map((item, index) => (
                                        <li key={index}>
                                            <a href={`#${item.id}`} className="text-secondary hover:underline text-left">
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                                <HeadingLine data="Recent Articles" />
                                {itemsToDisplay.map((item, index) => (
                                    <Link to={`/article-details/${item.id}`} key={index}>
                                        <div className="w-full p-2 flex flex-row justify-start items-center gap-4">
                                            <img src={`${item.image}`} alt="Billing Care Solutions" className="w-28" />
                                            <p className="text-secondary text-xs font-semibold underline text-left">{item.title}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    );
}

export default BlogDetails;
