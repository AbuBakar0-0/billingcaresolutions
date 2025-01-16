import React from 'react'

const SpecialityCard = ({ data }) => {
    return (
        <>
            {/* <div className='hidden lg:flex md:w-[45%] lg:w-[32%]'>
                <div className='h-auto m-2'>
                    <div className='flex flex-row justify-around '>
                        <img src={data.image} alt="Billing Care Solutions" className='w-32 h-32 p-3' />
                        <div className='flex flex-col justify-start items-start'>
                            <p className='my-2 text-lg text-secondary font-semibold md:min-h-12 lg:min-h-0'>{data.title}</p>
                            <p className='min-h-72 text-sm lg:text-md text-justify hyphens-auto' style={{ wordSpacing: "-0.05em", letterSpacing: "-0.03em" , textJustify:"distribute"}}>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-1 bg-primary my-2 lg:m-4'>
                    </div>
                </div>
            </div> */}
            <div className='flex md:w-[45%] lg:w-[32%] my-4'>
                <div className='w-full'>
                    <div className='flex flex-row justify-around items-center mb-4 gap-4'>
                        <img src={data.image} alt="Billing Care Solutions" className='w-24 h-24' />
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