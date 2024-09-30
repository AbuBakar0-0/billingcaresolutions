import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/terms and condition billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-6xl font-bold'>Terms And Conditions</p>
                        <p className='text-justify'>BCS USA LLC shall have the exclusive right to provide billing services for the Client.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero