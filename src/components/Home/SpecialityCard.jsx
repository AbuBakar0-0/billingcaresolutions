import React from 'react'

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div className='flex md:w-[45%] lg:w-[32%] my-4'>
                <div className='w-full'>
                    <div className='flex flex-row justify-around items-center mb-4 gap-4'>
                        <img src={data.icon} alt="Billing Care Solutions" className='w-24 h-24' />
                        <div className='flex flex-col justify-start items-start w-full text-md'>
                            <p className='my-2 text-secondary font-semibold'>{data.title}</p>
                        </div>
                    </div>
                    <p className='text-justify min-h-32 text-sm lg:text-md whitespace-normal break-words tracking-tight'>{data.description}</p>
                    <div className='w-full h-1 bg-primary my-2'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SpecialityCard