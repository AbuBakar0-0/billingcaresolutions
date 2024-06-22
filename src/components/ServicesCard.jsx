import React from 'react'

const ServicesCard = ({data}) => {
    return (
        <div className='w-40 h-44  flex flex-col justify-center items-center font-semibold text-center my-2'>
            <img src={data.img} alt="" />
            <p className='text-xs mt-2'>{data.title}</p>
            <p className='text-xs'>{data.description!=''?data.description:"‎ "}</p>
            <div className='w-full h-1 bg-red-400 my-2'></div>
        </div>
    )
}

export default ServicesCard