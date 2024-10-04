import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/domain areabillingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-2xl font-semibold'>Potential Across Healthcare Domains</p>
                        <p className='w-full uppercase text-6xl font-bold'>DOMAIN AREAS</p>
                        <p className='text-justify'>At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!</p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero