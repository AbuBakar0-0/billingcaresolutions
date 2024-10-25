import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white mb-10' style={{ backgroundImage: `url("./assets/headers/articles.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-3'>
                        <h1 className='text-3xl'>Billing Care Solutions</h1>
                        <p className='w-full uppercase text-6xl font-bold'> Articles</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero