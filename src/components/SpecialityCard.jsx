import React from 'react'

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div className='w-full md:w-[45%] lg:w-[30%] h-auto m-2'>
                <div className='flex flex-row justify-around'>
                    <img src={data.image} alt="" className='w-32 h-32 p-3' />
                    <div className='flex flex-col justify-start items-start w-full lg:w-3/4'>
                        <p className='my-2  text-secondary font-semibold md:min-h-12 lg:min-h-0'>{data.title}</p>
                        <p className='text-sm md:min-h-40 lg:min-h-36 text-justify'>{data.description}</p>
                    </div>
                </div>
                <div className='w-full h-1 bg-primary my-2 lg:m-4'>
                </div>
            </div>
        </>

    )
}

export default SpecialityCard