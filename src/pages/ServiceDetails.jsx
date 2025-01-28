import React, { useEffect, useState } from 'react'
import Hero from '../sections/ServiceDetails/Hero'
import { useLocation } from 'react-router-dom';
import Header from './../sections/Header';
import Footer from './../sections/Footer';
import HeadingLine from './../components/HeadingLine';
import services from '../sections/Services/data';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import faqs from '../sections/Faqs/data';
import ExpansionTile from '../components/FaqDetails/ExpansionTile';
import Heading from '../components/Heading';

function ServiceDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const query = new URLSearchParams(useLocation().search);
    const index = query.get('index');

    const data = services[index].data;
    const faqss = faqs[index];

    const [openIndex, setOpenIndex] = useState(null);


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            {/* <Helmet>
                <title>Services - Billing Care Solutions</title>
                <meta name="description" content="Billing Care Solutions recognize the uniqueness of each healthcare practice. We collaborate with our clients to create customized solutions that meet their specific needs. Whether the goal is to boost financial performance, improve patient satisfaction, or optimize operations, our extensive bilingual healthcare management services are designed to help achieve these objectives." />
                <meta property="og:title" content="Services - Billing Care Solutions" />
                <meta property="og:description" content="Billing Care Solutions recognize the uniqueness of each healthcare practice. We collaborate with our clients to create customized solutions that meet their specific needs. Whether the goal is to boost financial performance, improve patient satisfaction, or optimize operations, our extensive bilingual healthcare management services are designed to help achieve these objectives." />
                <meta property="og:image" content="/assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet> */}
            <Header />
            <Hero title={data.title} image={data.header} description={data.description} />
            <div className='w-full container flex flex-col md:flex-row justify-center items-start gap-4 mx-auto p-10 '>
                <div className='w-full md:w-3/4 flex flex-col justify-start items-start gap-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
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
                        <ContactForm />
                    </div>
                </div>
            </div >
            <Heading data={data.title+" FAQ's"} />
            <div className='w-full flex flex-col justify-between items-center gap-4 mb-10 px-10'>
                {faqss.questions.map((item, index) => (
                    <ExpansionTile
                        key={index}
                        data={item}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default ServiceDetails