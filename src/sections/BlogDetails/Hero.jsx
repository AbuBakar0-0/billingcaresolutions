import React from 'react'

const Hero=({title})=> {
    return (
        <>
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-[26rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center  p-10 lg:p-20'>
                    <div className='w-full  flex flex-col justify-center items-center gap-4'>
                        <h1 className='w-full uppercase texl-3xl md:text-5xl font-bold'>{title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero