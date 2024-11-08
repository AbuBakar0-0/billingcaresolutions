import React from 'react'

const Hero=({title , description})=> {
    return (
        <>
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-5xl font-bold'>{title}</h1>
                        <p className='text-justify'>{description}</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;