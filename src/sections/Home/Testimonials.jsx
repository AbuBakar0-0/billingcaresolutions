// MySwiper.js
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialCard from './../../components/Home/TestimonialCard';
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';



const Testimonials = () => {
    const [loading, setLoading] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                setLoading(true);
                // Fetch the header data where type is 'whybcs'
                const { data: data, error: headerError } = await supabase
                    .from('global_testimonials')
                    .select('*'); // We expect only one record
                if (headerError) throw headerError;

                setTestimonials(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);



    return (
        loading ? <Loader /> :
            <>

                <div className='px-10 py-14' style={{ backgroundImage: `url("/assets/Testimonial billingcaresolution.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='flex flex-row justify-center items-center space-x-3 text-white font-custom text-lg md:text-2xl font-medium pb-6'>
                        <div className='bg-white w-[2rem] h-[0.2rem]'></div>
                        <p className='text-2xl md:text-3xl'>Client's Reviews</p>
                        <div className='bg-white w-[2rem] h-[0.2rem]'></div>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide >
                                <TestimonialCard data={item} />
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </>

    );
};

export default Testimonials;
