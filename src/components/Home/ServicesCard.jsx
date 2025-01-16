import React from 'react'

const ServicesCard = ({data}) => {
    return (
        <div className='w-full min-h-36 md:w-1/5 md:h-44 flex flex-col justify-center items-center font-bold text-center my-2 mx-1 hover:animate-glow-border'>
            <img src={data.img} alt="Billing Care Solutions" className='w-16 h-16'/>
            {
                data.id<5?
                <p className='text-md mt-2 h-6' >{data.title}</p>
                :
                <p className='text-md mt-2 h-8'>{data.title}</p>
            }
            <p className='text-md'>{data.description!==''?data.description:"‎ "}</p>
            {
                data.id<5?
                <div className='w-3/5 h-1 bg-primary mb-2'></div>
                :
                <div className='w-3/5 h-1 bg-primary my-2'></div>
            }
        </div>
    )
}

export default ServicesCard