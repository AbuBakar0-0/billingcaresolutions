import React from 'react'

function Hero() {

    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("./assets/headers/services billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3'>
                        <p className='w-full uppercase text-2xl font-semibold'>Top-Notch Standards</p>
                        <h1 className='w-full uppercase text-6xl font-bold'>BCS SERVICES</h1>
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