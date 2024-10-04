import React, { useEffect } from 'react'
import Hero from '../sections/ServiceDetails/Hero'
import { useLocation } from 'react-router-dom';
import Header from './../sections/Header';
import Footer from './../sections/Footer';
import HeadingLine from './../components/HeadingLine';
import services from '../sections/Services/data';

function ServiceDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = services[index].data;
    return (
        <>
            <Header />
            <Hero title={data.title} image={data.header} />
            <div className='w-full container flex flex-col md:flex-row justify-center items-start gap-4 mx-auto p-10'>
                <div className='w-full md:w-3/4 flex flex-col justify-center items-center gap-4'>
                    <HeadingLine data={data.content.title} />
                    <p>{data.content.description}</p>
                    <HeadingLine data={data.sub_content_1.title} />
                    <ul className='w-full gap-2'>
                        {data.sub_content_1.data.map((item) => (
                            <>
                                <li><span className='text-secondary font-semibold mr-2'>{item.title}:</span>{item.description}</li>
                            </>
                        ))}
                    </ul>
                    <HeadingLine data={data.sub_content_2.title} />
                    <ul className='w-full gap-2'>
                        {data.sub_content_2.data.map((item) => (
                            <>
                                <li><span className='text-secondary font-semibold mr-2'>{item.title}:</span>{item.description}</li>
                            </>
                        ))}
                    </ul>
                    <HeadingLine data={data.sub_content_3.title} />
                    <ul className='w-full gap-2'>
                        {data.sub_content_3.data.map((item) => (
                            <>
                                <li><span className='text-secondary font-semibold mr-2'>{item.title}:</span>{item.description}</li>
                            </>
                        ))}
                    </ul>

                </div>
                <div className='w-full md:w-1/4 flex flex-col justify-start items-start'>
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
            </div >
            <Footer />
        </>
    )
}

export default ServiceDetails