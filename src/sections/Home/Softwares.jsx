import React, { useState, useEffect } from 'react';
import LogoSlider from './../../components/Home/LogoSlider';
import Heading from './../../components/Heading';
import { supabase } from '../../lib/supabase';

function Softwares() {
  const [logos1, setLogos1] = useState([]);
  const [logos2, setLogos2] = useState([]);
  const [logos3, setLogos3] = useState([]);

  useEffect(() => {
    // Fetch existing slides from Supabase
    const fetchSlides = async () => {
      const { data, error } = await supabase.from("softwares").select("*");

      if (error) {
        console.error("Error fetching slides:", error.message);
      } else {
        // Calculate 1/3 of the records
        const third = Math.floor(data.length / 3);

        // Split the data into 3 parts
        setLogos1(data.slice(0, third)); // First 1/3
        setLogos2(data.slice(third, 2 * third)); // Second 1/3
        setLogos3(data.slice(2 * third)); // Last 1/3
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Heading data="Softwares" />
      <LogoSlider logos={logos1} />
      <LogoSlider logos={logos2} direction='right' />
      <LogoSlider logos={logos3} />
      <div className='h-16 w-full'></div>
    </div>
  );
}

export default Softwares;
