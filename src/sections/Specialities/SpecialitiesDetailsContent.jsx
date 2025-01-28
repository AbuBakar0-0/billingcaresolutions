import React from 'react';
import Heading from '../../components/Heading';
import Stats from './../About/Stats';
import Footer from './../Footer';
import HeadingLine from './../../components/HeadingLine';
import SpecialityFaqCard from './../../components/Specialities/SpecialityFaqCard';
import { useState } from 'react';

const SpecialitiesDetailsContent = ({ data }) => {

    const [openIndex, setOpenIndex] = useState(null);


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className='w-full flex flex-col md:flex-row justify-center items-center p-10 container mx-auto gap-4'>
                <div className='md:w-1/2'>
                    <img  src={data.image} alt="Billing Care Solutions" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-4'>
                    <Heading data={data.content.sub_content_1.title} />
                    <p>{data.content.sub_content_1.details.title}</p>
                    <ul className='w-full flex flex-col justify-center items-start gap-4 '>
                        {data.content.sub_content_1.details.data.map((item) => (
                            <>
                                <li className='flex flex-row gap-3 justify-center items-center text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                                    <img  src="/assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='size-4' />
                                    <p className='font-semibold text-secondary'>{item.title}: &nbsp;
                                        <span
                                            className=" text-black font-normal"
                                            dangerouslySetInnerHTML={{ __html:  item.description }}
                                        />
                                    </p>
                                </li>
                            </>
                        ))}
                    </ul>
                    
                </div>
            </div>

            <div className='w-full flex flex-col justify-between items-center gap-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                <Heading data={data.content.sub_content_2.title} />
                <p className='-mt-5 text-center'>{data.content.sub_content_2.details.title}</p>
                <div className='w-full flex flex-wrap justify-center md:justify-center items-start gap-4 text-justify container mx-auto p-5'>
                    {data.content.sub_content_2.details.data.map((item) => (
                        <>
                            <div className='w-64 min-h-96 bg-gray-200 flex flex-col justify-start items-center p-5 pt-10 text-center gap-2 group hover:bg-secondary hover:transition-all hover:duration-300 hover:ease-in-out rounded-2xl'>
                                <div className='h-12 w-12 flex justify-center items-center'>
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        width="146.000000pt" height="215.000000pt" viewBox="0 0 146.000000 215.000000"
                                        preserveAspectRatio="xMidYMid meet" className='fill-primary group-hover:fill-white'>
                                        <g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            <path d="M675 2138 c-11 -6 -48 -33 -83 -60 l-63 -48 -111 0 -110 0 -33 -33
                                            c-23 -23 -39 -53 -49 -93 -24 -88 -46 -125 -96 -160 -25 -18 -64 -49 -88 -70
                                            -37 -32 -42 -42 -42 -78 0 -22 11 -74 25 -114 31 -91 31 -101 0 -192 -14 -40
                                            -25 -93 -25 -116 0 -46 15 -62 130 -147 49 -35 69 -70 95 -159 9 -32 27 -71
                                            41 -88 26 -30 26 -30 130 -30 119 0 127 -3 230 -81 63 -47 71 -51 112 -46 24
                                            3 56 14 71 26 14 11 52 39 85 61 l58 40 105 0 c101 0 105 1 133 28 16 17 35
                                            52 45 88 26 91 46 125 95 161 115 85 130 101 130 147 0 23 -11 76 -25 116 -14
                                            40 -25 85 -25 99 0 14 11 57 25 95 35 98 34 144 -7 182 -18 17 -49 41 -68 54
                                            -72 48 -90 72 -116 158 -16 51 -37 96 -54 115 -28 32 -29 32 -147 37 l-120 5
                                            -58 45 c-33 25 -68 50 -80 57 -25 16 -84 16 -110 1z m374 -494 c12 -15 21 -36
                                            21 -47 0 -14 -79 -101 -232 -254 -201 -201 -237 -233 -263 -233 -24 0 -47 17
                                            -127 97 -83 83 -98 102 -98 130 0 22 7 37 22 47 41 29 66 20 137 -49 l66 -64
                                            201 199 c217 217 232 226 273 174z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className='w-full h-20 flex flex-col justify-center items-center'>
                                    <p className='text-secondary text-xl font-semibold group-hover:text-white'>{item.title}</p>
                                </div>
                                <p className='group-hover:text-white'>{item.description}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            {
                data.content.sub_content_3 !== undefined ?
                    <div className='w-full flex flex-col justify-center items-start gap-4 container mx-auto my-10 p-10 '>
                        <HeadingLine data={data.content.sub_content_3.title} />
                        <p className='text-center'>{data.content.sub_content_3.details.title}</p>
                        <ul className='flex flex-col justify-center items-start gap-4'>
                            {data.content.sub_content_3.details.data.map((item) => (
                                <>
                                    <li className='w-full flex flex-col md:flex-row gap-2 justify-start items-center '>
                                        <img  src="/assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='size-4' />
                                        <p className='w-full text-secondary font-semibold text-lg'>{item.title}: <span className='font-normal text-black'>{item.description}</span></p>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    :
                    <></>
            }
            <div className='w-full flex flex-col justify-center items-start gap-4 container mx-auto my-10'>
                <Heading data="What Clients Say About Us" />
                <div className='w-full flex flex-wrap justify-center items-start gap-4 text-justify p-10'>
                    {data.testimonials.map((item) => (
                        <div className='md:w-[49.2%] bg-gray-100 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start p-8 rounded-lg gap-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight
'>
                            <img  src="/assets/specialities/testimonial.png" alt="Billing Care Solutions" className='size-20' />
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-secondary font-semibold font-custom'>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Stats />

            {
                data.faqs !== undefined ? <div className='w-full flex flex-col justify-center items-start gap-4 container mx-auto my-10 px-10'>
                    <Heading data="Frequently Asked Questions " />
                    {data.faqs.map((item, index) => (
                        <SpecialityFaqCard
                            key={index}
                            data={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div> : <></>
            }

            <Footer />

        </>
    );

}

export default SpecialitiesDetailsContent