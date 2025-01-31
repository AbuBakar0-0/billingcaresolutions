import React, { useEffect, useState } from 'react'
import Heading from './../../components/Heading';
import VisionCard from '../../components/About/VisionCard';
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';


function OurVisionAndMission() {

  const [loading, setLoading] = useState(false);
  const [visionMission, setVisionMission] = useState([]);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setLoading(true);
        // Fetch the header data where type is 'whybcs'
        const { data: headerData, error: headerError } = await supabase
          .from('vision_mission')
          .select('*')
          .single(); // We expect only one record

        if (headerError) throw headerError;

        setVisionMission(headerData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();
  }, []);

  return (
    loading ? <></> :
      <>
        <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
          <Heading data="Our Vision and Mission " />
          <p className='-mt-5 pb-5 font-semibold text-center italic'>{visionMission.tagline}</p>
          <div className='w-full flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
              <VisionCard title={'Our Vision'} description={visionMission.vision_description} img={visionMission.vision_icon} />
            </div>
            <div className='w-full md:w-1/3 flex flex-col justify-center items-center my-10 md:my-0'>
              <img src={visionMission.center_image} alt="Billing Care Solutions" className='h-96' />
            </div>
            <div className='w-full md:w-1/3 flex flex-col justify-center items-center shadow-md rounded-2xl'>
              <VisionCard title={'Our Mission'} description={visionMission.mission_description} img={visionMission.mission_icon} />
            </div>

          </div>
        </div>
      </>

  )
}

export default OurVisionAndMission