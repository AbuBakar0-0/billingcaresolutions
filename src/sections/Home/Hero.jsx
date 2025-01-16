// MySwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import HeroSlide from './../../components/Home/HeroSlide';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#4ec39e",

        },
        links: {
          color: "#0073b9",
          distance: 100,
          enable: true,
          opacity: 0.8,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  const data = [
    {
      title: "Expert Medical Billing and Coding through Billing Care Solutions.",
      titleColor: "#ffffff",
      description: "Expert Medical Billing and Coding Services Optimize Revenue Cycle Management with Precision and Efficiency, Ensuring Streamlined Healthcare Operations.",
      descriptionColor: "#ffffff",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Medical Billing Slide 2 billingcaresolutions.com.webp",
    },
    {
      title: "Billing Care Solutions is Excellent in Provider Enrollment & Credentialing",
      titleColor: "#4ec39e",
      description: "Our Comprehensive Provider Enrollment and Credentialing Services Ensure Seamless Integration into Healthcare Billing Systems, Optimizing Efficiency and Compliance.",
      descriptionColor: "#0073b9",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Credentialing Slide 3 billingcaresolutions.com.webp",
    },
    {
      title: "Simplify Prior Authorization with Billing Care Solutions.",
      titleColor: "#ffffff",
      description: "Transforming Healthcare Billing with Streamlined Prior Authorization Solutions, Ensuring Efficient and Effective Patient Care Management.",
      descriptionColor: "#ffffff",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Prior Authorization Slide 4 billingcaresolutions.com.webp",
    },
    {
      title: "Business Intelligence Reporting Made Easy with Billing Care Solutions.",
      titleColor: "#4ec39e",
      description: "Our Business Intelligence Reporting Service Offers Deep Data Analysis, Empowering Informed Decision-Making and Operational Efficiency.",
      descriptionColor: "#0073b9",
      link: "https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw",
      image: "./assets/hero/Business Intelligence Reporting Slide 5 billingcaresolutions.com.webp",
    }
  ];


  return (
    <>
      <Swiper
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides.forEach((slide) => {
            const contentElements = slide.querySelectorAll('.slide-content');
            contentElements.forEach((content) => {
              content.classList.remove('fade-up');
            });
          });
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const contentElements = activeSlide.querySelectorAll('.slide-content');
          contentElements.forEach((content, index) => {
            content.classList.remove('fade-up');
            void content.offsetWidth; // Trigger reflow
            content.style.animationDelay = `${index * 0.5}s`; // Adjust delay for each element
            content.classList.add('fade-up');
          });
        }}
        onInit={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const contentElements = activeSlide.querySelectorAll('.slide-content');
          contentElements.forEach((content, index) => {
            content.style.animationDelay = `${index * 0.5}s`; // Adjust delay for each element
            content.classList.add('fade-up');
          });
        }}
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
          delay: 5000,
          disableOnInteraction: false,
        }}

        className="mySwiper"
      >

        <SwiperSlide>
          <Particles
            id="tsparallax"
            particlesLoaded={particlesLoaded}
            options={options}
            className='z-0'
          />
          <div className='z-10 w-full h-[26rem] lg:h-[37rem] flex flex-col justify-center items-center p-10' style={{ backgroundImage: `url("./assets/hero/Logo Slide 1 billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <img src="./assets/BCS Logo billingcaresolutions.com.svg" alt="Billing Care Solutions" className='w-full md:w-1/2 h-auto animate-bounce-three slide-content' />
            <h1 className='text-sm md:text-2xl slide-content text-center'>Get hassle-free payments with Billing Care Solutions.</h1>
          </div>
        </SwiperSlide>
        {data.map((item) => (
          <SwiperSlide>
            <HeroSlide title={item.title} description={item.description} link={item.link} image={item.image} titleColor={item.titleColor} descriptionColor={item.descriptionColor}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
