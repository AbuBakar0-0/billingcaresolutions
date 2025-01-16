import React from 'react'
import LogoSlider from './../../components/Home/LogoSlider';
import Heading from './../../components/Heading';

function Softwares() {

  const logos1 = [
    { "img": "./assets/slider/1.svg", "link": "", "alt": "1.svg" },
    { "img": "./assets/slider/2.svg", "link": "", "alt": "2.svg" },
    { "img": "./assets/slider/3.png", "link": "", "alt": "3.png" },
    { "img": "./assets/slider/4.svg", "link": "", "alt": "4.svg" },
    { "img": "./assets/slider/5.svg", "link": "", "alt": "5.svg" },
    { "img": "./assets/slider/6.webp", "link": "", "alt": "6.webp" },
    { "img": "./assets/slider/7.png", "link": "", "alt": "7.png" },
    { "img": "./assets/slider/8.png", "link": "", "alt": "8.png" },
    { "img": "./assets/slider/9.svg", "link": "", "alt": "9.svg" },
    { "img": "./assets/slider/10.png", "link": "", "alt": "10.png" },
    { "img": "./assets/slider/11.png", "link": "", "alt": "11.png" },
    { "img": "./assets/slider/12.svg", "link": "", "alt": "12.svg" },
    { "img": "./assets/slider/13.png", "link": "", "alt": "13.png" },
    { "img": "./assets/slider/14.webp", "link": "", "alt": "14.webp" },
    { "img": "./assets/slider/15.jfif", "link": "", "alt": "15.jfif" },
    { "img": "./assets/slider/16.svg", "link": "", "alt": "16.svg" }
  ];

  const logos2 = [
    { "img": "./assets/slider/17.webp", "link": "", "alt": "17.webp" },
    { "img": "./assets/slider/18.webp", "link": "", "alt": "18.webp" },
    { "img": "./assets/slider/19.png", "link": "", "alt": "19.png" },
    { "img": "./assets/slider/20.png", "link": "", "alt": "20.png" },
    { "img": "./assets/slider/21.png", "link": "", "alt": "21.png" },
    { "img": "./assets/slider/22.webp", "link": "", "alt": "22.webp" },
    { "img": "./assets/slider/23.png", "link": "", "alt": "23.png" },
    { "img": "./assets/slider/24.jfif", "link": "", "alt": "24.jfif" },
    { "img": "./assets/slider/25.webp", "link": "", "alt": "25.webp" },
    { "img": "./assets/slider/26.webp", "link": "", "alt": "26.webp" },
    { "img": "./assets/slider/27.svg", "link": "", "alt": "27.svg" },
    { "img": "./assets/slider/28.png", "link": "", "alt": "28.png" },
    { "img": "./assets/slider/29.png", "link": "", "alt": "29.png" },
    { "img": "./assets/slider/30.png", "link": "", "alt": "30.png" },
    { "img": "./assets/slider/31.png", "link": "", "alt": "31.png" },
    { "img": "./assets/slider/32.png", "link": "", "alt": "32.png" },
    { "img": "./assets/slider/33.png", "link": "", "alt": "33.png" }
  ];

  const logos3 = [
    { "img": "./assets/slider/34.png", "link": "", "alt": "34.png" },
    { "img": "./assets/slider/35.png", "link": "", "alt": "35.png" },
    { "img": "./assets/slider/36.png", "link": "", "alt": "36.png" },
    { "img": "./assets/slider/37.svg", "link": "", "alt": "37.svg" },
    { "img": "./assets/slider/38.webp", "link": "", "alt": "38.webp" },
    { "img": "./assets/slider/39.svg", "link": "", "alt": "39.svg" },
    { "img": "./assets/slider/40.png", "link": "", "alt": "40.png" },
    { "img": "./assets/slider/41.png", "link": "", "alt": "41.png" },
    { "img": "./assets/slider/42.jfif", "link": "", "alt": "42.jfif" },
    { "img": "./assets/slider/43.png", "link": "", "alt": "43.png" },
    { "img": "./assets/slider/44.gif", "link": "", "alt": "44.gif" },
    { "img": "./assets/slider/45.webp", "link": "", "alt": "45.webp" },
    { "img": "./assets/slider/46.png", "link": "", "alt": "46.png" },
    { "img": "./assets/slider/47.png", "link": "", "alt": "47.png" },
    { "img": "./assets/slider/48.svg", "link": "", "alt": "48.svg" },
    { "img": "./assets/slider/49.png", "link": "", "alt": "49.png" },
    { "img": "./assets/slider/50.png", "link": "", "alt": "50.png" }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <Heading data="Softwares" />
      <LogoSlider logos={logos1} />
      <LogoSlider logos={logos2} direction='right' />
      <LogoSlider logos={logos3} />
      <div className='h-16 w-full'></div>
    </div>
  )
}

export default Softwares