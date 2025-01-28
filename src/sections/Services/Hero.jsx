import React from 'react'

function Hero() {

    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("/assets/headers/services billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:"center"}}>
                <div className='container mx-auto md:min-h-[24rem] md:max-h-[24rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] text-md md:scale-100'>
                        <p className='w-full uppercase text-xl font-semibold'>Top-Notch Standards</p>
                        <h1 className='w-full uppercase text-5xl font-bold'>BCS SERVICES</h1>
                        <p className='text-justify'>Billing Care Solutions recognize the uniqueness of each healthcare practice. We collaborate with our clients to create customized solutions that meet their specific needs. Whether the goal is to boost financial performance, improve patient satisfaction, or optimize operations, our extensive bilingual healthcare management services are designed to help achieve these objectives.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero