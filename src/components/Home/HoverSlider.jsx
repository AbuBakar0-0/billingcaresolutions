import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HoverSlider = () => {
  const [sliderWidth, setSliderWidth] = useState(50);

  const handleMouseMove = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const widthPercent = (offsetX / containerRect.width) * 100;
    setSliderWidth(widthPercent);
  };

  const handleMouseLeave = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const widthPercent = (offsetX / containerRect.width) * 100;
    if(widthPercent < 50){
      setSliderWidth(0); // Default to middle when mouse leaves
    } else{
      setSliderWidth(100);
    }
  };

  const handleTouchMove = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const touch = event.touches[0];
    const offsetX = touch.clientX - containerRect.left;
    const widthPercent = (offsetX / containerRect.width) * 100;
    setSliderWidth(widthPercent);
  };

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div className='w-full flex flex-row justify-between items-center'>
        <img src="./assets/hover_slider/user billingcaresolutions.com.webp" alt="Billing Care Solutions" className='w-1/6 mt-[0.132rem]' />
        <div
          className="relative w-4/6 h-[500px] overflow-hidden mx-auto object-cover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <img 
             src="./assets/hover_slider/Without BCS billingcaresolutions.com.webp"
              alt="Without BCS billingcaresolutions.com"
              className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover"
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              clipPath: `polygon(0 0, ${sliderWidth}% 0, ${sliderWidth}% 100%, 0 100%)`,
            }}
          >
            <img 
             src="./assets/hover_slider/With BCS billingcaresolutions.com.webp"
              alt="With BCS billingcaresolutions.com"
              className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover"
            />
          </div>
          <div
            className="absolute top-0 left-0 h-full w-[1px] bg-primary pointer-events-none flex flex-col justify-center items-center"
            style={{ left: `${sliderWidth}%` }}
          >
            <div className='h-1/3 bg-secondary w-2 rounded-2xl'></div>
          </div>
        </div>
        <img src="./assets/hover_slider/success billingcaresolutions.com.webp" alt="Billing Care Solutions" className='w-1/6 mt-[0rem]' />
      </div>
      <Link to="/contact" className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out'>
        Talk to an Expert --
      </Link>
    </div>
  );
};

export default HoverSlider;
