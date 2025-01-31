// MySwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import HeroSlide from './../../components/Home/HeroSlide';
import { supabase } from '../../lib/supabase';

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


  const [loading, setLoading] = useState(true);
  const [slide, setSlides] = useState([]);
  const [restOfSlides, setRestOfSlides] = useState([]);

  useEffect(() => {
    // Fetch existing slides from Supabase
    const fetchSlides = async () => {
      const { data, error } = await supabase.from("first_slide").select("*").single();
      if (error) {
        console.error("Error fetching slides:", error.message);
      } else {
        setSlides(data || []);
      }

      const { data: restData, error: restError } = await supabase.from("rest_of_slides").select("*").order("slide_no");
      if (error) {
        console.error("Error fetching slides:", error.message);
      } else {
        setRestOfSlides(restData || []);
      }
      setLoading(false);
    };

    fetchSlides();
  }, []);


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
          <div className='z-10 w-full h-[26rem] lg:h-[37rem] flex flex-col justify-center items-center p-10' style={{ backgroundImage: `url("${slide.bg_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <img src={slide.logo} className='w-full md:w-1/2 h-auto animate-bounce-three slide-content' />
            <h1 className='text-sm md:text-2xl slide-content text-center'>{slide.tagline}</h1>
          </div>
        </SwiperSlide>
        {restOfSlides.map((item, index) => (
          <SwiperSlide>
            <HeroSlide title={item.title} description={item.description} link={item.link} image={item.bg_image} titleColor={index % 2 != 0 ? "#ffffff" : "#4ec39e"} descriptionColor={index % 2 != 0 ? "#ffffff" : "#0073b9"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
