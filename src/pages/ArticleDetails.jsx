import React, { useEffect, useState } from 'react';
import Header from '../sections/Header';
import HeadingLine from './../components/HeadingLine';
import Footer from './../sections/Footer';
import { Link, useLocation } from 'react-router-dom';
import articles from '../sections/Articles/data';
import ContactForm from '../components/Contact/ContactForm';
import { Helmet } from 'react-helmet';

function ArticleDetails() {

    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = articles[index];

    // Extract the first 5 blogs for Recent Blogs section
    const itemsToDisplay = articles.slice(0, 5);

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/* <Helmet>
                <title>Articles - Billing Care Solutions</title>
                <meta name="description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
                <meta property="og:title" content="Articles - Billing Care Solutions" />
                <meta property="og:description" content="Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
            <Header /> */}
            {/* <Hero title={"BCS Insights"} /> */}
            <div className="w-full container mx-auto flex flex-col justify-center items-center p-10">

                <div className='w-full flex flex-row justify-center items-center space-x-3 text-primary font-custom text-2xl md:text-4xl font-medium p-4'>
                    <div className='bg-secondary w-[3rem] h-[0.3rem] rounded-full'></div>
                    <p className='text-center md:text-left font-custom'>{data.title}</p>
                    <div className='bg-secondary w-[3rem] h-[0.3rem] rounded-full'></div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 mt-5">
                    <div className="w-full md:w-3/4 flex flex-col justify-center items-start">
                        <img  src={`${data.image}`} alt="Billing Care Solutions" className="w-full" />

                        {/* Render Blog Content */}
                        <div className="mt-10">
                            <div
                                className="article-content text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                        </div>
                    </div>

                    {/* Sidebar with TOC and Recent Blogs */}
                    <div className="w-full md:w-1/5 hidden md:flex flex-col justify-between items-center gap-4 ">
                        {/* Table of Contents Section */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                            <HeadingLine data="Table of Contents" />
                            <ul className="list-disc list-inside space-y-2 ">
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
                            <HeadingLine data="Recent Articles" />
                            {itemsToDisplay.map((item, index) => (
                                <Link to={`/articleDetails?index=${item.id}`}>
                                    <div className="w-full p-2 flex flex-row justify-start items-center gap-4">
                                        <img  src={`${item.image}`} alt="Billing Care Solutions" className="w-28" />
                                        <p className="text-secondary text-xs font-semibold underline">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Contact Us Section */}
                        <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ArticleDetails;
