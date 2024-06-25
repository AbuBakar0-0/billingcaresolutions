import React from 'react'
import LogoSlider from './LogoSlider';

function Softwares() {

  const logos = [
    { id: 1, url: './assets/img.jpg', alt: 'Logo 1' },
    { id: 2, url: './assets/img.jpg', alt: 'Logo 2' },
    { id: 3, url: './assets/img.jpg', alt: 'Logo 3' },
    { id: 4, url: './assets/img.jpg', alt: 'Logo 4' },
    { id: 5, url: './assets/img.jpg', alt: 'Logo 5' },
    { id: 6, url: './assets/img.jpg', alt: 'Logo 6' },
  ];


  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <p className='text-3xl mb-10'>Softwares</p>
      <div className="flex items-center justify-center my-4">
        <LogoSlider logos={logos} direction={"left"} />
      </div>
      <div className="flex items-center justify-center my-4">
        <LogoSlider logos={logos} direction={"right"}/>
      </div>
      <div className="flex items-center justify-center my-4">
        <LogoSlider logos={logos} direction={"left"}/>
      </div>
    </div>
  )
}

export default Softwares