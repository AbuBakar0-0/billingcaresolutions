// MySwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialCard from './../../components/Home/TestimonialCard';



const Testimonials = () => {
    
    const data = [
        {
            name: "Linh Tran",
            feedback: "Adnan is very knowledgeable and stays on top of assigned tasks. I utilize his services for 3 of my companies. Highly recommended!",
        },
        {
            name: "Ashley Sahakian",
            feedback: "I have experienced nothing but the best service and quick results when it comes to their services. They are very friendly, and professional. They have really helped me grow my business! Thank you all so much! God bless!",
        },
        {
            name: "Emily Kariuki",
            feedback: "Great service. Professional, friendly, people who get the job done. The best.",
        },
        {
            name: "Melissa Renteria",
            feedback: "Excellent service and quick turn around, knowledgeable and friendly. Highly recommend it if you want results!",
        },
        {
            name: "Dr. Lisa",
            feedback: "Thanks to Billing Care Solutions, our practice has seen a significant improvement in cash flow and revenue. Their attention to detail and commitment to accuracy have made a real difference in our bottom line. We couldn't ask for a better partner in medical billing.",
        },
        {
            name: "Sarah",
            feedback: "Choosing Billing Care Solutions for our medical billing needs was one of our best decisions. Their specialists ensured compliance and maximized our revenue potential with unmatched dedication to excellence.",
        },
        {
            name: "Jane",
            feedback: "Billing Care Solutions excels in medical billing, offering strategic insights and innovative solutions that optimize revenue while ensuring compliance, making them an invaluable partner for healthcare professionals.",
        },
    ];

    return (
        <>

            <div className='px-10 py-14' style={{ backgroundImage: `url("./assets/Testimonial billingcaresolution.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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
                    {data.map((item) => (
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
