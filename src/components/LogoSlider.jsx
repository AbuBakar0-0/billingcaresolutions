import React from 'react';

const LogoSlider = ({ logos, direction}) => {
  return (
    <div className="relative w-full overflow-hidden logo-slider-container">
      <div className={`logo-slider-track flex ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide flex items-center justify-center p-4">
            <img src={logo.url} alt={logo.alt} className="" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="logo-slide flex items-center justify-center p-4">
            <img src={logo.url} alt={logo.alt} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
