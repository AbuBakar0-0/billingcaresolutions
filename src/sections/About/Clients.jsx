import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase';
import Loader from '../../components/ui/Loader';


function Clients() {

  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setLoading(true);
        // Fetch the header data where type is 'whybcs'
        const { data, error: headerError } = await supabase
          .from('client_reasons')
          .select('*').single(); // We expect only one record
        if (headerError) throw headerError;

        setClients(data);
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
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3 my-10 p-10'>
          <img src={clients.image} alt="Billing Care Solutions" className='w-full md:w-1/2 p-5' />
          <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
            <p className='text-3xl font-semibold text-secondary'>Reasons clients remain with us</p>
            <div className={`bg-primary w-2/3 h-[0.2rem]`}></div>
            <p className='text-justify whitespace-normal break-words tracking-tight'>
              {clients.description}
            </p>
          </div>
        </div>
      </>
  )
}

export default Clients