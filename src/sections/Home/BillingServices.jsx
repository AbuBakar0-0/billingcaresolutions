import React, { useEffect, useState } from 'react'
import Counter from './Counter';
import { supabase } from '../../lib/supabase';

function BillingServices() {

    const [letUsHandle, setLetUsHandle] = useState([]);
    const [counter, setCounter] = useState([]);
    const [bgImage, setBgImage] = useState("");

    useEffect(() => {
        // Fetch existing slides from Supabase
        const fetchSlides = async () => {
            const { data, error } = await supabase.from("let_us_handle").select("*");
            if (error) {
                console.error("Error fetching slides:", error.message);
            } else {
                setLetUsHandle(data || []);
            }

            const { data: bgData, error: bgError } = await supabase.from("background_images").select("*").eq('type', "letusHandle").single();
            if (bgError) {
                console.error("Error fetching slides:", bgError.message);
            } else {
                setBgImage(bgData || []);
            }

            const { data: counterData, error: counterError } = await supabase.from("counter").select("*");
            if (counterError) {
                console.error("Error fetching slides:", counterError.message);
            } else {
                setCounter(counterData || []);
            }
        };

        fetchSlides();
    }, []);


    return (
        <div className='flex flex-col justify-center items-center p-10' style={{ backgroundImage: `url("${bgImage.background_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='flex flex-row justify-center items-center space-x-3 text-white font-custom text-lg md:text-4xl text-center font-medium'>
                <div className='bg-white w-[2rem] h-[0.2rem]'></div>
                {letUsHandle.map((item, index) => (
                    item.title != "" && <p className='text-2xl md:text-3xl'>{item.title}</p>
                ))}
                <div className='bg-white w-[2rem] h-[0.2rem]'></div>
            </div>
            <div className='flex flex-wrap justify-center items-center md:p-8'>
                {letUsHandle.map((handle) => (
                    <div className='w-full md:w-1/2 lg:w-1/4 flex flex-row justify-start items-center text-white'>
                        <img src="/assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='w-4 h-4' />
                        <p className='p-2 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>{handle.item}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap justify-around items-center rounded-2xl border-4 border-white w-full bg-white p-10 shadow-3xl'>
                {counter.map((item) => (
                    <Counter title={item.suffix} number={item.number} image={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default BillingServices