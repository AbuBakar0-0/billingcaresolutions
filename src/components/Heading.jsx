import React from 'react'

const Heading = ({data})=> {
    return (
        <>
            <div className='w-full flex flex-row justify-center items-center space-x-3 text-secondary font-custom text-2xl md:text-3xl font-medium p-4'>
                <div className='bg-primary w-[3rem] h-[0.3rem] rounded-full'></div>
                <p className='text-center md:text-left font-custom'>{data}</p>
                <div className='bg-primary w-[3rem] h-[0.3rem] rounded-full'></div>
            </div>
        </>
    )
}

export default Heading