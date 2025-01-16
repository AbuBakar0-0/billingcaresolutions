import React from 'react'

function Hero() {
    return (
        <>
            <div className='bg-secondary text-white' style={{ backgroundImage: `url("./assets/headers/privacy policy billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='container mx-auto md:min-h-[24rem] md:max-h-[24rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center lg:p-10'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3 py-20 scale-[0.85] text-md md:scale-100'>
                        <h1 className='w-full uppercase text-5xl font-bold'>Privacy Policy</h1>
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