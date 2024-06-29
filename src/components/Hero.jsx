// MySwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import HeroSlide from './HeroSlide';

const Hero = () => {

  const data = [
    {
      title: "Expert Medical Billing and Coding through Billing Care Solutions.",
      description: "Expert Medical Billing and Coding Services Optimize Revenue Cycle Management with Precision and Efficiency, Ensuring Streamlined Healthcare Operations.",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Medical Billing Slide 2 billingcaresolutions.com.webp",
    },
    {
      title: "Billing Care Solutions is Excellent in Provider Enrollment & Credentialing",
      description: "Our Comprehensive Provider Enrollment and Credentialing Services Ensure Seamless Integration into Healthcare Billing Systems, Optimizing Efficiency and Compliance.",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Credentialing Slide 3 billingcaresolutions.com.webp",
    },
    {
      title: "Simplify Prior Authorization with Billing Care Solutions.",
      description: "Transforming Healthcare Billing with Streamlined Prior Authorization Solutions, Ensuring Efficient and Effective Patient Care Management.",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Prior Authorization Slide 4 billingcaresolutions.com.webp",
    },
    {
      title: "Business Intelligence Reporting Made Easy with Billing Care Solutions.",
      description: "Our Business Intelligence Reporting Service Offers Deep Data Analysis, Empowering Informed Decision-Making and Operational Efficiency.",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Business Intelligence Reporting Slide 5 billingcaresolutions.com.webp",
    }
  ];


  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-pagination-dot"></span>`;
          },
        }}
        // navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-screen h-96 text-white text-6xl flex flex-col justify-center items-center' style={{ backgroundImage: `url("./assets/hero/img.jpg")` }}>asadasdasdsaasdasdasd</div>
        </SwiperSlide>
        {data.map((item) => (
          <SwiperSlide>
            <HeroSlide title={item.title} description={item.description} link={item.link} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
