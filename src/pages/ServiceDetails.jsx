import React from 'react'
import Hero from '../sections/ServiceDetails/Hero'
import { useLocation } from 'react-router-dom';
import Header from './../sections/Header';
import Footer from './../sections/Footer';
import HeadingLine from './../components/HeadingLine';
import services from '../sections/Services/data';

function ServiceDetails() {
    window.scrollTo(0, 0);

    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = services[index].data;
    console.log(data);
    return (
        <>
            <Header />
            <Hero title={data.title} />
            <div className='w-full container flex flex-row justify-center items-start gap-4 mx-auto p-10'>
                <div className='w-3/4 flex flex-col justify-center items-center gap-10'>
                    <HeadingLine data={data.content.title} />
                    <p>{data.content.description}</p>
                    <HeadingLine data={data.sub_content_1.title} />
                    <div className='w-full flex flex-wrap justify-center items-center gap-4'>
                        {data.sub_content_1.data.map((item, index) => (
                            <div className={`w-80 h-auto rounded-lg shadow-xl flex flex-col justify-center items-center p-10 gap-4 group hover:scale-105 transition ease-in-out duration-150 ${index % 2 == 0 ? "hover:bg-secondary" : "hover:bg-primary"}`}>
                                <p className='text-3xl text-secondary font-semibold uppercase text-center group-hover:text-white'>{item.title}</p>
                                <p className='group-hover:text-white'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <HeadingLine data={data.sub_content_2.title} />
                    <div className='w-full flex flex-wrap justify-center items-center gap-4'>
                        {data.sub_content_2.data.map((item, index) => (
                            <div className={`w-[48%] min-h-56 rounded-lg shadow-xl flex flex-col justify-center items-center p-10 gap-4 group hover:scale-105 transition ease-in-out duration-150 ${index % 2 == 0 ? "hover:bg-secondary" : "hover:bg-primary"}`}>
                                <p className='text-3xl text-secondary font-semibold uppercase text-center group-hover:text-white'>{item.title}</p>
                                <p className='group-hover:text-white'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <HeadingLine data={data.sub_content_3.title} />
                    <div className='w-full flex flex-wrap justify-center items-center gap-4'>
                        {data.sub_content_3.data.map((item,index) => (
                            <div className={`w-64 min-h-80 rounded-lg shadow-xl flex flex-col justify-center items-center p-10 gap-4 group hover:scale-105 transition ease-in-out duration-150 ${index % 2 == 0 ? "hover:bg-secondary" : "hover:bg-primary"}`}>
                                <p className='text-3xl text-secondary font-semibold uppercase text-center group-hover:text-white'>{item.title}</p>
                                <p className='group-hover:text-white'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-1/4 flex flex-col justify-start items-start'>
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