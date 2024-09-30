import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white mb-10' style={{ backgroundImage: `url("./assets/headers/blog billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-2xl font-semibold'>Quality First</p>
                        <p className='w-full uppercase text-6xl font-bold'>BCS SERVICES</p>
                        <p className='text-justify'>We understand that every healthcare practice is different, so we
                            work closely with our clients to develop bespoke solutions that
                            help them achieve their goals. Whether you want to improve
                            your practice's financial performance, increase patient
                            satisfaction, or streamline your operations, our comprehensive
                            healthcare management services can help you achieve it.</p>
                        <button className='px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero