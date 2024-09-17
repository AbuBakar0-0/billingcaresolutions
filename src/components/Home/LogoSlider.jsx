import React from 'react';

const LogoSlider = ({ logos, direction = 'left' }) => {

  const animationClass = direction === 'right' ? 'animate-slide-right' : 'animate-slide-left';


  return (
    <div className="relative overflow-hidden w-full">
      <div className={`flex items-center ${animationClass}`}>
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 p-4">
            <img src={logo['img']} alt={`Logo ${index + 1}`} className="w-36 h-auto" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 p-4">
            <img src={logo['img']} alt={`Logo duplicate ${index + 1}`} className="w-36 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
