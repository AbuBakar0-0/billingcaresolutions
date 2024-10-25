import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/privacy policy billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-6xl font-bold'>Privacy Policy</h1>
                        <p className='text-justify'>BCS provides the most comprehensive and effective medical billing services, following HIPAA rules and regulations to secure protected health information.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero