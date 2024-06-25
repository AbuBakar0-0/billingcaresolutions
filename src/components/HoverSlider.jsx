import React, { useState } from 'react';

const HoverSlider = () => {
  const [sliderWidth, setSliderWidth] = useState(50);

  const handleMouseMove = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const widthPercent = (offsetX / containerRect.width) * 100;
    setSliderWidth(widthPercent);
  };

  const handleMouseLeave = () => {
    setSliderWidth(30); // Default to middle when mouse leaves
  };

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div
        className="relative w-full h-[400px] overflow-hidden mx-auto bg-gray-100"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="./assets/img2.jpg"
            alt="2"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${sliderWidth}% 0, ${sliderWidth}% 100%, 0 100%)`,
          }}
        >
          <img
            src="./assets/img.jpg"
            alt="1"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute top-0 left-0 h-full w-[1px] bg-red-500 pointer-events-none flex flex-col justify-center items-center"
          style={{ left: `${sliderWidth}%` }}
        >
          <div className='h-1/3 bg-blue-700 w-2 rounded-2xl'></div>
        </div>
      </div>
      <div className='bg-secondary rounded-2xl px-8 py-2 text-white text-sm my-4'>
          Talk to an Expert --
      </div>
    </div>
  );
};

export default HoverSlider;



