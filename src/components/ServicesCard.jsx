import React from 'react'

const ServicesCard = ({data}) => {
    return (
        <div className='w-32 h-28 md:w-1/5 md:h-44 flex flex-col justify-center items-center font-semibold text-center my-2 mx-1'>
            <img src={data.img} alt="" className='w-16 h-16'/>
            {
                data.id<5?
                <p className='text-xs mt-2 h-6' >{data.title}</p>
                :
                <p className='text-xs mt-2 h-8'>{data.title}</p>
            }
            <p className='text-xs'>{data.description!==''?data.description:"‎ "}</p>
            {
                data.id<5?
                <div className='w-full h-1 bg-primary mb-2'></div>
                :
                <div className='w-full h-1 bg-primary my-2'></div>
            }
        </div>
    )
}

export default ServicesCard