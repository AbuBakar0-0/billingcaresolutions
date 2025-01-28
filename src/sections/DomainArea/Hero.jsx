import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("/assets/headers/domain-area-billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[28rem] md:max-h-[28rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] text-md md:scale-100'>
                        <p className='w-full uppercase text-xl font-semibold'>Potential Across Healthcare Domains</p>
                        <h1 className='w-full uppercase text-5xl font-bold'>DOMAIN AREAS</h1>
                        <p className='text-justify'>At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!</p>
                        <Link to="/contact" className='flex justify-center px-3 py-2 rounded-2xl md:w-1/3  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</Link>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero