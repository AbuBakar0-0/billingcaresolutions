import React from 'react'

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div className='w-full md:w-[45%] lg:w-[30%] h-auto m-4'>
                <div className='flex flex-row justify-around'>
                    <img src="./assets/img.jpg" alt="" className='w-32 h-32 p-3' />
                    <div className='flex flex-col justify-start items-start w-full lg:w-3/4'>
                        <p className='my-2 text-primary font-semibold md:min-h-10'>{data.title}</p>
                        <p className='text-xs md:min-h-32'>{data.description}</p>
                    </div>
                </div>
                <div className='w-full h-1 bg-primary my-2 lg:m-4'>
                </div>
            </div>
        </>

    )
}

export default SpecialityCard