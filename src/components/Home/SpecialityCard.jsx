import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div className='hidden lg:flex md:w-[45%] lg:w-[32%]'>
                <div className='h-auto m-2'>
                    <div className='flex flex-row justify-around'>
                        <LazyLoadImage src={data.image} alt="" className='w-32 h-32 p-3' />
                        <div className='flex flex-col justify-start items-start w-full lg:w-3/4'>
                            <p className='my-2 text-2xl text-secondary font-semibold md:min-h-12 lg:min-h-0'>{data.title}</p>
                            <p className='min-h-48 whitespace-normal text-justify break-words tracking-tight'>{data.description}</p>
                        </div>
                    </div>
                    <div className='w-full h-1 bg-primary my-2 lg:m-4'>
                    </div>
                </div>
            </div>
            <div className='flex lg:hidden'>
                <div className='w-full'>
                    <div className='flex flex-row justify-around items-center'>
                        <LazyLoadImage src={data.image} alt="" className='w-24 h-24 p-3' />
                        <div className='flex flex-col justify-start items-start w-full lg:w-3/4'>
                            <p className='my-2  text-secondary font-semibold'>{data.title}</p>
                        </div>
                    </div>
                    <p className=' text-left'>{data.description}</p>
                    <div className='w-full h-1 bg-primary my-2'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SpecialityCard