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
                <div className='h-44 w-full flex flex-col justify-start items-start border-4 border-primary bg-black rounded-2xl p-4'>
                    <div className='flex flex-row items-center justify-between text-white w-full'>
                        <p>{data.name}</p>
                        <img src="./assets/google.png" alt="" className='w-8 h-8' />
                    </div>
                    <img src="./assets/stars.png" alt="" className='h-4 w-max' />
                    <div className='text-white font-sm overflow-y-auto my-2'>
                        {data.feedback}
                    </div>
                </div>
            </SwiperSlide>
        </>

    );
};

export default TestimonialCard;