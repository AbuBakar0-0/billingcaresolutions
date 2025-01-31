// MySwiper.js
import React from 'react';
import {SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const TestimonialCard = ({ data }) => {


    return (
        <>
            <SwiperSlide className="flex items-center justify-center">
                <div className='h-44 w-full flex flex-col justify-start items-start border-4 border-primary rounded-2xl p-4'>
                    <div className='flex flex-row items-center justify-between text-white w-full'>
                        <p className='text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>{data.author}</p>
                        <img src="/assets/google.png" alt="Billing Care Solutions" className='w-8 h-8' />
                    </div>
                    <img src="/assets/stars.png" alt="Billing Care Solutions" className='h-4 w-max' />
                    <div className='text-white text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight overflow-y-auto my-2 pr-3'>
                        {data.quote}
                    </div>
                </div>
            </SwiperSlide>
        </>

    );
};

export default TestimonialCard;