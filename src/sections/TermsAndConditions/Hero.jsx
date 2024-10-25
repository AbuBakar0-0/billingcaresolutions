import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/terms and condition billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col justify-center items-start gap-4 text-center p-5'>
                    <h1 className='w-full uppercase text-6xl font-bold text-left'>Terms And Conditions</h1>
                    <p className='text-justify'>BCS USA LLC shall have the exclusive right to provide billing services for the Client.</p>
                </div>
            </div>
        </>
    )
}

export default Hero